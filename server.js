const http = require("http");
const url = require("url");
const fs = require("fs");
const event = require("events")
const html = fs.readFileSync("./index.htm", "utf-8");
let products = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
let productListHtml = fs.readFileSync("./productList.html", "utf-8");
let productDetailHtml = fs.readFileSync("./productDetails.html", "utf-8");

let replaceHtml = require("./replace");
const server = http.createServer();
// server.on("request", (request, response) => {
//   let { query, pathname: path } = url.parse(request.url, true);
//   if (path === "/" || path.toLocaleLowerCase() === "/home") {
//     response.writeHead(200, {
//       "Content-Type": "text/html",
//       "my-header": "Hellow, world",
//     });
//     response.end(html.replace("{{%CONTENT%}}", "You are in Home page"));
//   } else if (path.toLocaleLowerCase() === "/about") {
//     response.writeHead(200, {
//       "Content-Type": "text/html",
//       "my-header": "Hellow, world",
//     });
//     response.end(html.replace("{{%CONTENT%}}", "You are in About page"));
//   } else if (path.toLocaleLowerCase() === "/contact") {
//     response.writeHead(200, {
//       "Content-Type": "text/html",
//       "my-header": "Hellow, world",
//     });
//     response.end(html.replace("{{%CONTENT%}}", "You are in Contact page"));
//   } else if (path.toLocaleLowerCase() === "/products") {
//     if (!query.id) {
//       let productHtmlArray = products.map((prod) => {
//         return replaceHtml(productListHtml, prod);
//       });
//       let productResponseHtml = html.replace(
//         "{{%CONTENT%}}",
//         productHtmlArray.join(","),
//       );
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.end(productResponseHtml);
//     } else {
//       let prod = products[query.id];
//       let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//       response.end(html.replace("{{%CONTENT%}}", productDetailResponseHtml));
//     }
//   } else {
//     response.writeHead(404, {
//       "Content-Type": "text/html",
//       "my-header": "Hellow, world",
//     });
//     response.end(html.replace("{{%CONTENT%}}", "Error 404: Page not found!"));
//   }
// });

// let myEmitter = new event.EventEmitter()
// myEmitter.on("userCreated", ()=> {
//   console.log("An event is raised")
// })
// myEmitter.emit("userCreated")

server.on("request", (req,res)=> {
   console.log(req)
   let rs = fs.createReadStream("./large-file.txt")
   rs.pipe(res)
   // rs.on("data", (chunk)=> {
   //  res.write(chunk)
   // })
   // rs.on("end", ()=> {
   //  res.end()
   // })
})
// let myEmitter = new user();

// myEmitter.on("userCreated", (id, name) => {
//   console.log(`A new user ${name} with ID ${id} is created!`);
// });

// myEmitter.on("userCreated", (id, name) => {
//   console.log(`A new user ${name} with ID ${id} is added to database!`);
// });

// myEmitter.emit("userCreated", 101, "John");
module.exports = server;
