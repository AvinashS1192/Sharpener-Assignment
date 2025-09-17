const express = require("express");
const router = require("./Routes/routes.js");
const { route } = require("./Routes/courses");
const port = 3000;
const app = express();

app.use("/students", router.StudentsRouter);
app.use("/courses", router.CoursesRouter);

app.get("/welcome", (req, res) => {
  res.send("<h1>Welcome to the Student & Course Portal API!</h1>");
});

app.use("*all", (req, res) => {
  res.send("<h1>404-Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
