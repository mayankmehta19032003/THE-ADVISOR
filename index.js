import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "	https://api.adviceslip.com/advice";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", {view :(result.data)});
  } catch (error) {
    res.render("index.ejs");
  }
});

app.post("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", {content :result.data});
  } catch (error) {
    res.render("index.ejs");
  }
});


app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})

