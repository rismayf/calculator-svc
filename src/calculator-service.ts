import { IncomingMessage, ServerResponse } from "http";
import { parse } from 'url'
import { add, minus, multiply, division } from "./calculator";


export function addService(req: IncomingMessage, res: ServerResponse) {
    //parsing request
    const url = parse(req.url, true)
    const query = url.query
    // n1 sama n2 harus ada
    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end()
        return
    }
    //n1 sama n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10)
    const n2 = parseInt(query['n2'] as string, 10)
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400
        res.end()
        return
    }
    //add
    const n3 = add(n1, n2)
    const output = {
        result : n3
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output))
    res.end()
}

export function minusService(req: IncomingMessage, res: ServerResponse) {
    //parsing request
    const url = parse(req.url, true)
    const query = url.query
    // n1 sama n2 harus ada
    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end()
        return
    }
    //n1 sama n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10)
    const n2 = parseInt(query['n2'] as string, 10)
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400
        res.end()
        return
    }
    //add
    const n3 = minus(n1, n2)
    const output = {
        result : n3
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output))
    res.end()
}

export function multiplyService(req: IncomingMessage, res: ServerResponse) {
    //parsing request
    const url = parse(req.url, true)
    const query = url.query
    // n1 sama n2 harus ada
    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end()
        return
    }
    //n1 sama n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10)
    const n2 = parseInt(query['n2'] as string, 10)
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400
        res.end()
        return
    }
    //add
    const n3 = multiply(n1, n2)
    const output = {
        result : n3
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output))
    res.end()
}

export function divisionService(req: IncomingMessage, res: ServerResponse) {
    //parsing request
    const url = parse(req.url, true)
    const query = url.query
    // n1 sama n2 harus ada
    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end()
        return
    }
    //n1 sama n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10)
    const n2 = parseInt(query['n2'] as string, 10)
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400
        res.end()
        return
    }
    //add
    const n3 = division(n1, n2)
    const output = {
        result : n3
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output))
    res.end()
}