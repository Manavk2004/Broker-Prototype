import http from "node:http"
import fs from "fs"
import path from "path"
import {serveFile} from "./route_handling/basicHTML.js"

const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) =>{
    console.log(`This is the url ${req.url}`)
    if (req.method === "GET"){
        return await serveFile(__dirname, res, req.url)
    
}})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})