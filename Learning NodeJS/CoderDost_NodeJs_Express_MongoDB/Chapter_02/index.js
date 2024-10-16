// const express = require("express");
// const server = express();
// console.log("Hello Server");
// server.listen(8080);

const responseObj = {
  name: "Nirmalya Dhara",
  age: 21,
  company: ["Dhara Industries", "Banik Foundation", "De Atinus"],
};

const file = require("fs");
const jsonData = file.readFileSync("data.json", "utf-8");
const htmlData = file.readFileSync("index.html", "utf-8");
const pageNotFound = file.readFileSync("./404notfound.html", "utf-8");
const jsonObj = JSON.parse(jsonData);
const recipe = jsonObj.recipes[Math.floor(Math.random() * 9)];

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(`Let's Start the server :>>`);
  /* 
  REVISIT: Requests :-
  console.log(req.headers);
  console.log(req.url);
  console.log(req.method);
  console.log(req);

  REVISIT: Responses :-
  res.setHeader("dummy", "Dummy Value");
  res.setHeader("name", "Nirmalya Dhara");
  res.setHeader("Content-type", "text/html");
  res.setHeader("Content-type", "application/json");
  res.end(
    `<h1 style="text-align:center; background-color:#055; color:#fff">Server Res...!</h1>
    <br> <h2>${JSON.stringify(responseObj)}</h2>`
  );
  res.end(data); 
  */
  // ? Routing
  const idx = req.url.startsWith("/recipes/") ? req.url.split("/").pop() : 0;
  // console.log(jsonObj.recipes[idx]);

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      let updatedHtmlData = htmlData
        .replace("{title}", recipe.name)
        .replace("{list0}", recipe.ingredients[0])
        .replace("{list1}", recipe.ingredients[1])
        .replace("{list2}", recipe.ingredients[2]);
      res.end(updatedHtmlData);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(jsonData);
      break;
    case `/recipes/${idx}`:
      res.setHeader("Content-Type", "text/html");
      let newUpdatedHtmlData = htmlData
        .replace("{title}", jsonObj.recipes[idx]?.name)
        .replace("{list0}", jsonObj.recipes[idx]?.ingredients[0])
        .replace("{list1}", jsonObj.recipes[idx]?.ingredients[1])
        .replace("{list2}", jsonObj.recipes[idx]?.ingredients[2]);
      res.end(newUpdatedHtmlData);
      break;
    default:
      res.writeHead(404, "Page Not Found");
      res.end(pageNotFound);
      break;
  }
});
const port = 8080;
const serverAddress = "127.0.0.1:";
server.listen(port, () =>
  console.log(`server live at http://${serverAddress + port}/`)
);
// http://127.0.0.1:5500/
