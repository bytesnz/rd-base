"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.RDHeader = function () { return (React.createElement("header", { className: "rdHeader" },
    React.createElement("div", { className: "logo" }),
    React.createElement("div", { className: "nav", tabIndex: "1" },
        React.createElement("div", { className: "hamburger" }),
        React.createElement("nav", null,
            React.createElement("a", { href: "//www.rd", title: "Information about Reef Doctor" }, "Information"),
            React.createElement("a", { href: "//files.rd", title: "Useful files including all Reef Doctor presentations, useful software and sustaintable living (SL) data templates" }, "Files"),
            React.createElement("a", { href: "//data.rd", title: "Aquaculture and science data" }, "Data"),
            React.createElement("a", { href: "//maps.rd", title: "Maps and POI of the Bay of Ranobe" }, "Maps"),
            React.createElement("a", { href: "//upload.rd", title: "The place to upload completed SL data worksheets" }, "Upload"),
            React.createElement("a", { href: "//www.rd/weather.html", title: "Show the current weather forecase" }, "Weather"))),
    React.createElement("div", { className: "logo-text" }))); };
