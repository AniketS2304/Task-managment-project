import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import conncetTodb from "./db.js";
import taskRoutes from "./routes/taskRoutes.js";

conncetTodb();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", taskRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})