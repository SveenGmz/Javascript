var fs = require("fs");
console.log("\\n Abriendo Archivo. . . ");

var content = fs.readFile("Quijote.txt",
"utf8", function (error,content) {
    console.log(content);
})

console.log("\n Haciendo otra cosa\n");
console.log(process.uptime());