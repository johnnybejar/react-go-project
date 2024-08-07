package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/", func(ctx *gin.Context) {fmt.Println("Get path from root")})

	router.Run("localhost:8000");
}

/*
	Endpoint: /players/id/{playerId}/rank
*/
func getPlayerRank() {}

/*
	Endpoint: /players/id/{playerId}/stats
*/
func getPlayerStats() {}
