const express = require("express");
const fs = require("fs").promises;
const http = require("http");

app = express();

PORT = 3030;

/**Function to read the content of html file */
async function readFileContent(filepath) {
  try {
    // read the content of the file using await since using promise based method here.
    const data = await fs.readFile(filepath, "utf-8");
    return data;
  } catch (e) {
    console.log("Error occured :" + e);
  }
}

app.get("/", async (req, res) => {
  res.send(await readFileContent("./index.html"));
});

app.get("/about", async (req, res) => {
  res.send(await readFileContent("./about.html"));
});

app.get("/contact", async (req, res) => {
  res.send(await readFileContent("./contact-me.html"));
});

app.use(async (req, res) => {
  res.status(404).send(await readFileContent("./404.html"));
});

app.listen(PORT, (err) => {
  if (err) {
    throw new err();
  }
  console.log("EXPRESS APPLICATION STARTED");
});
