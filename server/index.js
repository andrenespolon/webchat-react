const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const http = require("http");
const bodyParser = require("body-parser");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(http);

const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Is running!" });
  } catch (error) {
    res.json({ error: "Ops!" });
  }
});

server.listen(port, () => {
  console.log(`Runnig on ${port}`);
});

io.on("connection", (socket) => {
  console.log(`A user connected (id: ${socket.id})!`);
  socket.on("Chat message", (msg) => {
    console.log(msg);
    io.emit("Chat message", msg);
  });
});
