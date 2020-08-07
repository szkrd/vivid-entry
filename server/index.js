require('dotenv').config()
const http = require('http')
const httpProxy = require('http-proxy')

const token = process.env.ACCESS_TOKEN
if (!token || token.length < 128) {
  console.error('Invalid or missing ACCESS_TOKEN env var!')
  process.exit(1)
}

// cors + insecure (https triggers EPROTO error)
const proxy = httpProxy.createProxyServer({
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2', 'x-request-start'],
  redirectSameOrigin: true,
  httpProxyOptions: { xfwd: false },
  secure: false,
  rejectUnauthorized: false,
})
proxy.on('proxyReq', (proxyReq, req, res, options) => {
  proxyReq.setHeader('Authorization', `Bearer ${token}`)
  proxyReq.setHeader('Content-Type', 'application/json;charset=utf-8')
  proxyReq.setHeader('Host', 'api.themoviedb.org')
})

const target = 'http://api.themoviedb.org/'
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target })
})

const port = parseInt(process.env.PORT, 10) || 5050
console.info(`Proxy target is "${target}";\nlistening on port ${port}`)
server.listen(port)
