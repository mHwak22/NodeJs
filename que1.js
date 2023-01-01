const http = require("http");
const fs = require("fs");
const url = require("url");
const m1 = require("./modules/calc");
server = http.createServer(function (req, resp) {
    var q = url.parse(req.url, true);
    console.log(q);
    resp.writeHeader(200, { "content-type": 'text/html' });

    switch (q.pathname) {
        case "/home":
            console.log(req.q)
            rs = fs.createReadStream("./public/calc.html");
            rs.pipe(resp);
            break;

        case "/addtion":
            console.log(req.q)
            var num1 = q.query.num1;
            var num2 = q.query.num2;
            var add = m1.addition(num1, num2);
            resp.write("<h2>Addtion of 2 number is" + add + "</h2>");
            // resp.end();
            break;
        case "/substration":
            var num1 = q.query.num1;
            var num2 = q.query.num2;
            var sub = m1.substraction(num1, num2);
            resp.write("<h2>Substravtion of 2 number is " + sub + "</h2>")
            break;
        case "/multiplication":
            var num1 = q.query.num1;
            var num2 = q.query.num2;
            var mul = m1.multipliction(num1, num2);
            resp.write("<h2>Multiplication of 2 number is " + mul + "</h2>")
            break;
        case "/divison":
            var num1 = q.query.num1;
            var num2 = q.query.num2;
            var div = m1.division(num1, num2);
            resp.write("<h2>Multiplication of 2 number is " + div + "</h2>");
            resp.end();
            break;
        case "/square":
            var num = q.query.num3;
            var sq = m1.square(num);
            resp.write("<h2>Square of " + num + " number is " + sq + "</h2>");
            resp.end();
            break;
        case "/sum":
            var num = [];
            for (let i = 0; i < num.length; i++) {
                num = q.query.num4;
            }
            var sum = m1.sum(num = []);
            resp.write("<h2>Sum of number is " + sum + "</h2>");
            resp.end();
            break;
    }
});
server.listen(8000);
console.log("server running at 8000")