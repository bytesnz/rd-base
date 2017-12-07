"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejs = require('ejs');
var path = require('path');
var fs = require('fs');
var ejsTemplate = path.join(__dirname, './index.ejs');
exports.template = ejs.compile(fs.readFileSync(ejsTemplate).toString());
exports.default = exports.template;
