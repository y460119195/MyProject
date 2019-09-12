var net = require('net')

var server = net.createServer()

var port = 8080

var todoList= []

server.on('connection',conn=>{
  conn.on('data',data =>{
    conn.write('HTTP/1.1 200 OK\r\n')
    conn.write('Content-Type:text/html\r\n')
    conn.write('\r\n')
    conn.write(html)
    conn.end()
  })
})

server.listen(port,()=>{
  console.log('server listening on port',port)
})



//HTTP/1.1 200 OK
//Content-Type:text/html
//Content-Length:
//Data:


