#!/usr/bin/env node

const fs = require("fs");
const sass = require("node-sass");

const out = sass.renderSync({
	file: "src/main.scss"
});

if(!fs.existsSync("dist"))
	fs.mkdirSync("dist");
fs.writeFileSync("dist/main.css", out.css);
