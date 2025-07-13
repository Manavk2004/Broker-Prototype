import fs from "fs"
import path from "path"


const types = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".jsx": "text/javascript", 
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".svg": "image/svg+xml",
    ".json": "application/json"
}

function basicInfo(filePath, res, data){
    const ext = path.extname(filePath)
    let contentType = types[ext]
    res.setHeader("Content-Type", `${contentType}`)
    console.log(res.getHeader("Content-Type"))
    res.statusCode = 200
    res.end(data)
}


export async function serveFile(__dirname, res, url){
    let filePath = path.join(__dirname, "dist", url)
    console.log(`This is the filePath ${filePath}`)

    if(url === "/api"){
        filePath = path.join(__dirname, "dist", "index.html")
    }else if (url === "/favicon.ico"){
        res.writeHead(204)
        res.end()
    }else if(url === "./report.pdf"){
        await fs.readFile("./report.pdf", (err, data) =>{
            if(err){
                res.statusCode(500)
                res.end("Error reading file")
                return
            }
            res.writeHead(200, { "Content-Type": "application/pdf" })
            res.end(data)
        })
    }

    await fs.readFile(filePath, (err, data)=>{
        if (err){
            res.setHeader("Content-Type", "text/html")
            res.statusCode = 500
            res.end("Internal Server Error")
        }else{
            basicInfo(filePath, res, data)
        }
    })
}
