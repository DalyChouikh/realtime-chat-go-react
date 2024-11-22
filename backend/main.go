package main

import (
	"fmt"
	"net/http"

	"github.com/DalyChouikh/realtime-chat-go-react/pkg/websocket"
)

func serveWS(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}
	go websocket.Writer(ws)
	websocket.Reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/ws", serveWS)
}

func main() {
	fmt.Println("Distributed Chat App v0.1")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
