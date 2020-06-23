var express = require('express')
var app = express()

app.listen(3000, () => {console.log("Connected")})

app.get('/', function(req,res) {
    res.send("Hello World")
    console.log(req.get('user-agent'))
})

app.get('/loop', function(req,res) {
    numbers = ''
    for(var i = 0; i < 1000; i++) {
        if(i % 2 == 0) {
        numbers += i + ' '
        }
    }
    res.send(numbers)
})

app.get('/fizzbuzz', function(req,res) {
    result = ''
    for(var i = 1; i < 500; i++) {
        if((i % 3 == 0)  && (i % 5 == 0)) {
            result += ' FizzBuzz '
        }
        else if(i % 3 == 0) {
            result += ' Fizz '
        }
        else if(i % 5 == 0) {
            result += ' Buzz '
        } else {
            result += i + ' '
        }
    }
    res.send(result)
})