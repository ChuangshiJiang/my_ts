let exec = require('child_process').exec;
function start (response) {
  console.log("Request handler 'start' was called.");
  exec('ls-lah', (error, stdout, stderr) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(stdout);
    response.end();
  });
}

function upload () {
  console.log("Request handler 'upload' was called.");
  return 'Hello upload';
}

exports.start = start;
exports.upload = upload;