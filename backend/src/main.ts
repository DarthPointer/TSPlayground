import { idkDoSomething } from "./helloModules";
import express from "express";

idkDoSomething();

const app = express();
app.use(express.json());
app.get("/test", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // по хорошему это делать миддлварей
  res.send("Hello from backend!");
});
const port = 3000;
console.log(`starting server on http://localhost:${port}`);
app.listen(port, () => console.log("server started"));
