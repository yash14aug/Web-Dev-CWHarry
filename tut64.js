const fs = require("fs");
let text = fs.readFileSync("dele.txt" , "utf-8");
text = text.replace("YASH" , "Yusuf");
console.log(text);

console.log("Creating a new File .....");
fs.writeFileSync("yusuf.txt" , text);
   