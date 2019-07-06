package server

import (
	"fmt"
	"github.com/aplJake/grpc-golang-react-v1/pkg/cmd"
	"os"
)

func main()  {
	if err := cmd.RunServer(); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
