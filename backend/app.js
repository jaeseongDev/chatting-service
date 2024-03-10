const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  }
});

io.on("connection", (socket) => {
  console.log("Connection 완료!")
  socket.on("send-message", (data) => {
    console.log("메시지 전송");
    console.log(data);
    io.emit("chat-message", data);
  });
});

httpServer.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행중입니다.");
});
