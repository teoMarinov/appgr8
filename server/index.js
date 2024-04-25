import express from "express";
import cors from "cors";
import "./db/config.js";
import test from "./routes/post.route.js"

const app = express();
app.use(express.json());
app.use(cors());

app.use("/post", test)

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running...\nPort: ${PORT}`));
