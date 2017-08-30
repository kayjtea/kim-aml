const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({noGzip: true});

server.use(middlewares)
server.use(router)
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
})
