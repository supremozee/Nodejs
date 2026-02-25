const http = require("http");
const url = require("url");
const fs = require("fs");
const html = fs.readFileSync("./index.htm", "utf-8");
let products = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
let productListHtml = fs.readFileSync("./productList.html", "utf-8");
let productDetailHtml = fs.readFileSync("./productDetails.html", "utf-8");

let replaceHtml = require("./replace")
 const server = http.createServer((request, response) => {
  let { query, pathname: path } = url.parse(request.url, true);
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hellow, world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in Home page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hellow, world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in About page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hellow, world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in Contact page"));
  } else if (path.toLocaleLowerCase() === "/products") {
    if (!query.id) {
      let productHtmlArray = products.map((prod) => {
        return replaceHtml(productListHtml, prod);
      });
      let productResponseHtml = html.replace(
        "{{%CONTENT%}}",
        productHtmlArray.join(","),
      );
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(productResponseHtml);
    } else {
      let prod = products[query.id];
      let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
      response.end(html.replace("{{%CONTENT%}}", productDetailResponseHtml));
    }
  } else {
    response.writeHead(404, {
      "Content-Type": "text/html",
      "my-header": "Hellow, world",
    });
    response.end(html.replace("{{%CONTENT%}}", "Error 404: Page not found!"));
  }
});
module.exports = server