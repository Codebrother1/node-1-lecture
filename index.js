const express = require('express')


const app = express();

//  ! Top Level Middleware
app.use(express.json()); 

const port = 4040;
const users = [{id:1, name: "Cole"}, {id:2, name: "Ben"}, {id: 3,name: "Fred"}]

// General request for all data
app.get('/api/users', (req, res) =>{
  res.status(200).send(users)
})

// using params to request one piece of data
app.get('/api/users/:id', (req, res) => {
  console.log(req.params);
  let user = users.find(elem => elem.id === +req.params.id)
  if(!user){
    res.status(404).send("Invalid user id")
  }else{
    res.status(200).send(user)
  }
 
})

// Using query to request a pice of data
app.get("/api/user", (req, res) => {
  console.log(req.query);
  let papaya = users.find(elem => elem.name === req.query.name)
  res.status(200).send(papaya)
})

app.listen(port, () => console.log(`Server running on port ${port}`))