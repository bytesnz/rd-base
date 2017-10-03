"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.RDHeader = function () { return (React.createElement("header", { className: "rdHeader" },
    React.createElement("div", { className: "logo" }),
    React.createElement("div", { className: "nav", tabIndex: "1" },
        React.createElement("div", { className: "hamburger" }),
        React.createElement("nav", null,
            React.createElement("a", { href: "//www.rd" }, "Information"),
            React.createElement("a", { href: "//files.rd" }, "Files"),
            React.createElement("a", { href: "//data.rd" }, "Data"),
            React.createElement("a", { href: "//maps.rd" }, "Maps"),
            React.createElement("a", { href: "//upload.rd" }, "Upload"))),
    React.createElement("div", { className: "logo-text" }))); };
