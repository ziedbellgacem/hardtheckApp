const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const productRouter = require("./routes/products");
const userRouter = require("./routes/users");
const commentRouter = require("./routes/comment");
connectDB();

// midelweres
app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/auth", userRouter);
app.use("/api/product/comments", commentRouter);
const port = 9000;
app.listen(port, console.log(`server runing on port:${port}`));
