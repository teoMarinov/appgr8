import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running...\nPort: ${PORT}`));
