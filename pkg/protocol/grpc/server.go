package grpc

import (
	"context"
	v1 "github.com/aplJake/grpc-golang-react-v1/pkg/api/v1"
	"google.golang.org/grpc"
	"log"
	"net"
	"os"
	"os/signal"
)

// RunServer register To-Do service and runs gRPC service to publish To-Do service
func RunServer(ctx context.Context, v1API v1.ToDoServiceServer, port string) error  {
	listen, err := net.Listen("tcp", ":" + port)
	if err != nil {
		return nil
	}

	// register service
	server := grpc.NewServer()
	v1.RegisterToDoServiceServer(server, v1API)

	// gracful shutdown
	// make chanel which can listen for signals from OS. os.Signal pckg is used to access incoming signal from OS
	c := make(chan os.Signal, 1)

	// use Notify mthd to register system calls
	signal.Notify(c, os.Interrupt)

	// create a go routine to listen channel c for incoming signals
	go func() {
		for range c {
			log.Println("Shutting down server...")

			server.GracefulStop()
			// wait for the context expiration
			<-ctx.Done()
		}
	}()

	log.Println("Starting gRPC server...")
	return server.Serve(listen)
}