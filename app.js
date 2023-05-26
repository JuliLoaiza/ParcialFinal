const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const {createServer, Server} = require("http");
const httpServer = createServer(app)
const io = new Server(httpServer,{
  path: "/socket"
})
//app.use(express.json);

const mongoURL = "mongodb+srv://ParcialDEMW:ParcialDEMW@parcial.teazuoh.mongodb.net/"
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado a la Base de Datos");
  })
  .catch((e) => console.log(e));

app.listen(5000, () => {
  console.log("Servidor iniciado en puerto 5000");
});

httpServer.listen(4000,()=>{
  console.log("Servidor iniciado en puerto 4000")
})

io.on("connection", (socket)=>{
  socket.on("sendMessage", (room, message)=>{
    io.to(room).emit("message", message);
  })
})

app.post("/post", async (req, res) => {
    console.log(req.body);
    const { room } = req.body;
  
    try {
      if (room == "123") {
        res.send({ status: "Room encontrada" });
      } else {
        res.send({ status: "Room no encontrada" });
      }
    } catch (error) {
      res.send({ status: "Algo salió mal, intenta de nuevo" });
    }
  });
  
  require("./src/Info");
  
  const User = mongoose.model("InfoUser");
  
  
  app.post("/message", async (req, res) => {
      const { ID, Latitud, Longitud, Room} = req.body;
      try {
        await Message.create({ Latitud: Latitud, Longitud:Longitud, Room: Room });
        if(ID == "1234"){
          res.send({ mensaje: "Holaaa" });
        }
      } catch (error) {
        res.send({ status: "Error" });
      }
    });
    


