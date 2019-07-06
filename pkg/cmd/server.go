package cmd

import (
	"context"
	"database/sql"
	"flag"
	"fmt"
	"github.com/aplJake/grpc-golang-react-v1/pkg/protocol/grpc"
	v1 "github.com/aplJake/grpc-golang-react-v1/pkg/service/v1"

	// mysql driver
	_ "github.com/go-sql-driver/mysql"
)

// Cofig is configuration for Server
type Config struct {
	// gRPC server start parameters section
	// GRPCPort is TCP port to listen for gRPC server
	GRPCPort string

	//DB Datastore parameters section
	DatastoreDBHost string
	DatastoreDBUser string
	DatastoreDBPassword string
	DatastoreDBSchema string
}

// RunServer runs gRPC server and HTTP gateway
func RunServer() error  {
	ctx := context.Background()

	var cfg Config

	// get configuration from the flags
	flag.StringVar(&cfg.GRPCPort, "grpc-port", "", "gRPC port to bind")
	flag.StringVar(&cfg.DatastoreDBHost, "db-host", "", "Database host")
	flag.StringVar(&cfg.DatastoreDBUser, "db-user", "", "Database user")
	flag.StringVar(&cfg.DatastoreDBPassword, "db-password", "", "Database password")
	flag.StringVar(&cfg.DatastoreDBSchema, "db-schema", "", "Database schema")
	flag.Parse()

	if len(cfg.GRPCPort) == 0 {
		return fmt.Errorf("invalid TCP port for gRPC server: '%s'", cfg.GRPCPort)
	}

	// add MySQL driver specific parameter to parse date/tme
	param := "parseTime=true"

	uri := fmt.Sprintf("%s:%s@tcp(%s)/%s?%s",
		cfg.DatastoreDBUser,
		cfg.DatastoreDBPassword,
		cfg.DatastoreDBHost,
		cfg.DatastoreDBSchema,
		param)
	db, err := sql.Open("mysql", uri)
	if err != nil {
		return fmt.Errorf("failed to open database: %v", err)
	}
	defer db.Close()

	v1API := v1.NewToDoServiceServer(db)

	return grpc.RunServer(ctx, v1API, cfg.GRPCPort)

}