const jayson = require("jayson");

const client = jayson.client.http({
  port: 4040,
  hostname: "localhost",
});

// test RPC add methods
function add(a, b, callback) {
  client.request("add", [a, b], (err, error, response) => {
    if (err) throw err;
    console.log(response);
    callback(response);
  });
}

module.exports = {
  add,
};
