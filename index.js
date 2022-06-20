// const webSocketsServerPort = 8000

// const server = http.createServer(
//     function (req, res) {
//       res.write('Hello World!'); //write a response to the client
//       res.
//         res.end(); //end the response 

//     }
//   );
//   server.listen(process.env.PORT || webSocketsServerPort, () => {
//     console.log(`Example app listening on port 8000`)
//   });



const express = require('express')
const app = express()
const path = require('path')

const cors = require('cors');
app.use(cors());
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/orangestack')))

// app.get('/',function(req,res){
//     res.send("it's working")
// })
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/orangestack/index.html')
})
app.listen(process.env.PORT || 4200, () => {
    console.log(`serving website `);
})
