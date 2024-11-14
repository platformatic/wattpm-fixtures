const http = require("node:http")

module.exports = function create () {
  return http.createServer((_, res) => {
    res.writeHead(200, { 'content-type': 'application/json', connection: 'close' })
    res.end(JSON.stringify({ ok: true }))
  })
}
