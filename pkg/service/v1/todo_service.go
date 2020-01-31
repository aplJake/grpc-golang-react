package v1

import (
	"context"
	"database/sql"
	v1 "github.com/aplJake/grpc-golang-react-v1/pkg/api/v1"
	"github.com/golang/protobuf/ptypes"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"time"
)

const (
	// apiVersion is version of API is proided by server
	apiVersion = "v1"
)

// toDoServiceServer is implementation of v1.ToDoServiceServer proto interface
type toDoServiceServer struct {
	db *sql.DB
}

func NewToDoServiceServer(db *sql.DB) v1.ToDoServiceServer  {
	return &toDoServiceServer{
		db: db,
	}
}

// checkAPI checks if the API version requested by clinet is supported by server
func (s *toDoServiceServer) checkAPI(api string) error  {
	if len(api) > 0 {
		if apiVersion != api {
			return status.Errorf(codes.Unimplemented,
				"Unsupported API version: service implements API" +
				" version '%s', but asked for '%s'", apiVersion, api)
		}
	}
	return nil
}

// connect returns SQL database connection
func (s *toDoServiceServer) connect(ctx context.Context) (*sql.Conn, error)  {
	c, err := s.db.Conn(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Unknown, "Failed to connect to database with error: %v", err.Error())
	}

	return c, err
}

// create a new to do task
func (s *toDoServiceServer) Create(ctx context.Context,  req *v1.CreateRequest) (*v1.CreateResponse, error) {
	// check if the API version requested by app is supported by server
	if err := s.checkAPI(req.Api); err != nil {
		return nil, err
	}

	// get SQL connection
	c, err := s.connect(ctx)
	if err != nil {
		return nil, err
	}
	defer c.Close()

	reminder, err := ptypes.Timestamp(req.ToDo.Reminder)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "Reminder field has invalid format %v", err.Error())
	}

	// insert To-Do entity data
	res, err := c.ExecContext(ctx, "INSERT INTO to_do_db.to_do(`title`, `description`, `reminder`) VALUES(?,?,?)",
		req.ToDo.Title, req.ToDo.Description, reminder)
	if err != nil {
		return nil, status.Errorf(codes.Unknown, "Failed to insert into to_do with err: %v", err.Error())
	}

	// get ID of created to_do
	id, err := res.LastInsertId()
	if err != nil {
		return nil, status.Errorf(codes.Unknown, "Failed to retrieve ID for created to_do with err: %v", err.Error())
	}

	return &v1.CreateResponse{
		Api: apiVersion,
		Id: id,
	}, nil
}

// read to do task
func (s *toDoServiceServer) Read(ctx context.Context, req *v1.ReadRequest) (*v1.ReadResponse, error) {
	// check if API version requested by the app is supported by server
	if err := s.checkAPI(req.Api); err != nil {
		return nil, err
	}

	// get SQL connection
	c, err := s.connect(ctx)
	if err != nil {
		return nil, err
	}
	defer c.Close()

	// query to_do by ID
	rows, err := c.QueryContext(ctx, "SELECT `to_do_id` `title`, `description`, `reminder` FROM to_do_db.to_do WHERE to_do_id=?",
		req.Id)
	if err != nil {
		return nil, status.Errorf(codes.Unknown, "Failed to select from to_do with err: %v", err.Error())
	}
	defer rows.Close()

	if !rows.Next() {
		if err := rows.Err(); err != nil {
			return nil, status.Errorf(codes.Unknown, "Failed to retirieve data from to_do with err: %v", err.Error())
		}
		return nil, status.Errorf(codes.NotFound, "to_do with with ID=%v is not found", req.Id)
	}

	// get to_do data
	var td v1.ToDo
	var reminder time.Time
	if err := rows.Scan(&td.Id, &td.Title, &td.Description, &reminder); err != nil {
		return nil, status.Errorf(codes.Unknown, "reminder field has invalid format with err: %v", err.Error())
	}

	if rows.Next() {
		return nil, status.Errorf(codes.Unknown, "Found maltiple to_do rows with ID %v", req.Id)
	}

	return &v1.ReadResponse{
		Api: apiVersion,
		ToDo: &td,
	}, nil
}

func (s *toDoServiceServer) Update(ctx context.Context, req *v1.UpdateRequest) (*v1.UpdateResponse, error) {
	// check if API version requested by the app is supported by server
	if err := s.checkAPI(req.Api); err != nil {
		return nil, err
	}

	// get SQL connection
	c, err := s.connect(ctx)
	if err != nil {
		return nil, err
	}
	defer c.Close()

	reminder, err := ptypes.Timestamp(req.ToDo.Reminder)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "Reminder has invalid format with err: %v", err.Error())
	}

	// update to_do
	res, err := c.ExecContext(ctx, "UPDATE to_do_db.to_do SET `title`=?, `description`=?, `reminder`=? WHERE `to_do_id`=?",
		req.ToDo.Title, req.ToDo.Description, reminder, req.ToDo.Id)
	if err != nil {
		return nil, status.Errorf(codes.Unknown, "Failed to update to_do with err: %v", err.Error())
	}

	rows, err := res.RowsAffected()
	if err != nil {
		return nil, status.Errorf(codes.NotFound, "Failed to retrieve rows affected value with error: %v", err.Error())
	}

	if rows == 0 {
		return nil, status.Errorf(codes.NotFound, "to_do with ID = %v is not found", req.ToDo.Id)
	}

	return &v1.UpdateResponse{
		Api: apiVersion,
		Updated: rows,
	}, nil
}

// delete to_do task
func (s *toDoServiceServer) Delete(ctx context.Context, req *v1.DeleteRequest) (*v1.DeleteResponse, error) {
	// check if API version requested by the app is supported by server
	if err := s.checkAPI(req.Api); err != nil {
		return nil, err
	}

	// get SQL connection
	c, err := s.connect(ctx)
	if err != nil {
		return nil, err
	}
	defer c.Close()

	// delete to_do
	res, err := c.ExecContext(ctx, "DELETE FROM to_do_db.to_do WHERE `to_do_id`=?", req.Id)
	if err != nil {
		return nil, status.Errorf(codes.Unknown, "Failed to delete to_do with error: %v", err.Error())
	}

	rows,err := res.RowsAffected()
	if err != nil {
		return nil, status.Errorf(codes.NotFound, "Failed to retrieve rows affected value with error: %v", err.Error())
	}

	if rows == 0 {
		return nil, status.Errorf(codes.NotFound, "to_do with ID = %v is not found", req.Id)
	}

	return &v1.DeleteResponse{
		Api: apiVersion,
		Deleted: rows,
	}, nil
}

// read all to_do tasks
func (s *toDoServiceServer) ReadAll(ctx context.Context, req *v1.ReadAllRequest) (*v1.ReadAllResponse, error) {
	// check if API version requested by the app is supported by server
	if err := s.checkAPI(req.Api); err != nil {
		return nil, err
	}

	// get SQL connection
	c, err := s.connect(ctx)
	if err != nil {
		return nil, err
	}
	defer c.Close()

	// get to_do list
	rows, err := c.QueryContext(ctx, "SELECT `to_do_id`, `title`, `description`, `reminder` FROM to_do_db.to_do")
	if err != nil {
		return nil, status.Errorf(codes.Unknown, "Failed to select to_do with error: %v", err.Error())
	}
	defer rows.Close()

	var reminder time.Time
	list := []*v1.ToDo{}
	for rows.Next() {
		td := new(v1.ToDo)
		if err := rows.Scan(&td.Id, &td.Title, &td.Description, &reminder); err != nil {
			return nil, status.Errorf(codes.Unknown, "Failed to retrieve field values from to_do rows with error: %v",
				err.Error())
		}

		td.Reminder, err = ptypes.TimestampProto(reminder)
		if err != nil {
			return nil, status.Errorf(codes.Unknown, "Reminder field has invalid format wit error: %v", err.Error())
		}
		list = append(list, td)
	}

	if err := rows.Err(); err != nil {
		return nil, status.Errorf(codes.Unknown, "Failed to retrieve data from to_do with error: %v",
			err.Error())
	}

	return &v1.ReadAllResponse{
		Api: apiVersion,
		ToDos: list,
	}, nil

}
