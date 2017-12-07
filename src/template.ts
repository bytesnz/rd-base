const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const ejsTemplate = path.join(__dirname, '../index.ejs');

export const template = ejs.compile(fs.readFileSync(ejsTemplate).toString());
export default template;
