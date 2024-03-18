package main

import (
	"context"
	"fmt"

	"github.com/GurbanowGadam/sendSmsgRPC"
	"google.golang.org/grpc"
)

func main() {
	addr := "127.0.0.1:8080"
	conn, err := grpc.Dial(addr, grpc.WithInsecure())
	if err != nil {
		fmt.Println("grpc.Dial => ", err)
	}

	client := sendSmsgRPC.NewSendSmsgRPCServiceClient(conn)
	ctx := context.Background()

	resp, err := client.SendSmsToNodeService(ctx, &sendSmsgRPC.SendSmsgRPCRequest{})
	if err != nil {
		fmt.Println("client.SendSmsToNodeService => ", err)
	}

	fmt.Println("SendSmsToNodeService =>  => ", resp)	
}
