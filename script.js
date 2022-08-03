let http=require('http')                                        // Node Server
http.createServer(function(req,res){
    res.write('<h1>Hello Node Server !!</h1><br><a href="https://progradexpress.herokuapp.com">Click to see Express Server Results</a>')
    res.end()
     
}).listen( process.env.PORT || 8000,()=>{console.log('Node Server running at the port 8000')})
