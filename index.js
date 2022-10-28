//Import pakages
const express =require('express')
const morgan = require('morgan')

//Congigure out port
//Check if tit is set in the envioronment variable , if not then we default to 3000
const port = process.env.PORT||3000

//Create an instance of express application
const app=express()

//Log all request
app.use(morgan('common'))

//get
app.get('/',(req,resp)=>{
    //what is the media type
    //return HTML content
    resp.type('text/html')
    //set status code
    resp.status(200)
    //send the response
    resp.send(`<h1>The current time is ${new Date()}/</h1>`)
})
//Start webapplication
app.listen(port,()=>{
    console.info(`Starting applicaiton on port ${port} at ${new Date()}`)
})
