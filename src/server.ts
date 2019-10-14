import { createServer } from 'http'
import { parse } from 'url'
import { addService, minusService, multiplyService, divisionService } from './calculator-service'

const server = createServer((req, res) => {
    const url = parse(req.url, true)
    switch (url.pathname) {
        case '/add':
            addService(req, res)
            break;
        case '/minus':
            minusService(req, res)
            break;
        case '/multiply':
            multiplyService(req, res)
            break;
        case '/division':
            divisionService(req, res)
            break;
        default:
            res.statusCode = 404;
            res.end()
    }
})

server.listen(3000)
