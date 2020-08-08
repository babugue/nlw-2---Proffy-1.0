//Server
const express = require('express')
const server = express()

const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//Configure nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Start and configures from server
server
// receive req.body data
.use(express.urlencoded({ extended: true}))
// Static files configure (css, scripts, imagens, etc)
.use(express.static("public"))
// Application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Server start
.listen(5500)