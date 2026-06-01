const express = require("express");
const cors    = require("cors");
const morgan  = require("morgan");

const logger       = require("./src/middleware/logger");
const errorHandler = require("./src/middleware/errorHandler");
const usersRouter   = require("./src/routes/users");
const coursesRouter = require("./src/routes/courses");
const reviewsRouter = require("./src/routes/reviews");

const app  = express();
const PORT = 5000;

// ── Middleware ────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

// ── Routes ────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ message: "Edutech API chal raha hai!" });
});

app.use("/api/users",   usersRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/reviews", reviewsRouter);

// ── 404 ───────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route nahi mili" });
});

// ── Error Handler ─────────────────────────────
app.use(errorHandler);

// ── Start ─────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server chal raha hai: http://localhost:${PORT}`);
});