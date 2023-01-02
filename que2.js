const http = require("http");
const fs = require("fs");
const url = require("url");
const m2 = require("./modules/que2mod");

server = http.createServer(function(req, resp){
    var q = url.parse(req.url, true);
    console.log(q);
    resp.writeHeader(200,{"content-type":"text/html"});

    switch(q.pathname){
        case "/home":
            rs=fs.createReadStream("./public/que2form.html");
            rs.pipe(resp);
            break;
        case "/data_submit":
            var num=q.query.num;
            if(num<=5){
                var ans = m2.factorial(num);
                resp.write("<h1>Factorial of entered number is "+ans+"</h1>")
            }
            else if (num>5 && num<=10) {
                var prime =m2.printable(num);
                for(let i=1;i<=10;i++){
                resp.write("<h1> "+prime+"</h1>");
                }
            } 
            else{
                var table =m2.myprime(num);
                resp.write("<h1> "+table+"</h1>");

            }
            
    }
})
server.listen(9000);
console.log("server listen at 9000")