import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

// app.use(logger);
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//create function called logger(req, res, next)
//inside your function, console.log the req. method and 
//the request URL
//remember to call next();
//mount your middleware function using
//the exprress.use() method
//test the logging on localhost and with Postman 