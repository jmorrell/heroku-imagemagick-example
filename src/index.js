#!/usr/bin/env node

const fs = require('fs');
const http = require('http');
const im = require('imagemagick');

const PORT = process.env.PORT || 5000;

im.resize({
  srcPath: 'kitten.jpg',
  dstPath: 'kitten-small.jpg',
  width:   256
}, function(err, stdout, stderr){
  if (err) throw err;
  console.log('resized kittens.jpg to fit within 256x256px');
});

const server = http.createServer((req, res) => {
  fs.createReadStream('./kitten-small.jpg').pipe(res);
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
