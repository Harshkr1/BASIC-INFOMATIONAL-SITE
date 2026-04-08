const fs = require("fs").promises;
const http = require("http");

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

const server = http.createServer(async (req, res) => {
  // Global location of FilePath of the required *.html
  const indexFilePath = "./index.html";
  const aboutFilePath = "./about.html";
  const contactFilePath = "./contact-me.html";
  const errorFilePath = "./404.html";

  var dataToDisplay = "";

  //set the content type of response first
  res.writeHead(200, {
    "content-type": "text/html",
  });

  // based on the url set the data to be displayed.
  if (req.url === "/") dataToDisplay = await readFileContent(indexFilePath);
  else if (req.url === "/about")
    dataToDisplay = await readFileContent(aboutFilePath);
  else if (req.url == "/contact")
    dataToDisplay = await readFileContent(contactFilePath);
  else dataToDisplay = await readFileContent(errorFilePath);

  // send the response
  res.end(dataToDisplay);
});

server.listen(8080);
