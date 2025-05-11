console.log(process.env);

const nodePath = process.execPath;

console.log(nodePath);

global.nodeJsPath = nodePath;

console.log('Global varible:', global.nodeJsPath);
