package main

import (
	"fmt"
	"net/http"

	"github.com/DalyChouikh/realtime-chat-go-react/pkg/websocket"
)

func handleWebSockets(pool *websocket.Pool) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		serveWS(pool, w, r)
	}
}

func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()
	http.HandleFunc("/ws", handleWebSockets(pool))
}

func main() {
	fmt.Println("Distributed Chat App v0.1")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
