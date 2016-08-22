var express = require("express")
var app = express()
var path = require("path")
var moment = require("moment")

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/:timestamp', (req, res) =>{
    
    var time = moment(req.params.timestamp, 'MMMM DD, YYYY', true)
    
     if (!time.isValid())
    time = moment.unix(req.params.timestamp);
    
    res.json({
        normal: time.format('MMMM DD, YYYY'),
        unix: time.format('X')
    })
})



app.listen(app.get('port'), () =>{
    console.log("listening " + app.get('port'))
})
