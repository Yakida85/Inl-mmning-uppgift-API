const express = require('express')
const app = express()
app.use(express.json()) 
app.use(express.static('public'))
const PORT = process.env.PORT || 3000

var Teams = [
        {name:'Juventus', players:[
            {name: 'Delpiro', position: 'Striker'}, 
            {name: 'Nedved', position: 'Midfileder'},
            {name: 'Tresege', position: 'Striker'}
        ]},
        {
            name: 'Realmadrid' , players:[
                {name: 'Ronaldo', position: 'Striker'},
                {name: 'Carlos', position: 'Defender'},
                {name: 'Figo', position: 'Midfileder'}
            ]
        }
    ]



app.get("/", (req,res) => {
   
})



app.get('/team/all', (req,res) => {
    res.send(Teams)
})

app.get('/team/:teamname',(req,res) => {
 const teamname = req.params.teamname.toLowerCase()
 const Team =Teams.find(({name})=> name.toLowerCase() === teamname)
 if(Team){

     res.send(Team)
 }
 else{
    res.status(404).send()
 }
})

app.post('/team', (req,res)=> {
    Teams.push(req.body)
    res.send()
})



app.delete('/team/:teamname', (req,res)=>{
    console.log(req.params)
    const teamname = req.params.teamname.toLowerCase()
    console.log(Teams)
    const id = Teams.findIndex(({name})=> name.toLowerCase() === teamname)
    console.log(id)
    Teams.splice(id,1)
    res.send()
})












app.listen(PORT,() => {
    console.log(`listning on ${PORT} `)
}) 
