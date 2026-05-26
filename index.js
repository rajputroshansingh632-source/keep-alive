const https = require("https");

const URL = "https://magmanode.com/server?id=991590";

setInterval(() => {
  https.get(URL, (res) => {
    console.log(`Pinged: ${res.statusCode}`);
  }).on("error", (err) => {
    console.log(err.message);
  });
}, 300000);

console.log("MagmaNode keepalive started");
