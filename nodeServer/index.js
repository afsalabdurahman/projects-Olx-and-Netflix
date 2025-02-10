const express = require('express');
const movie1=require("./movies/movie1.json")
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path');
const multer = require('multer');
const createUrl=require('./src/multerApi/Urlmaker')
const storage=require("./src/multerApi/muter")
app.use(cors())
app.use('/uploads', express.static('uploads'));
  const upload = multer({ storage: storage });
  const fs = require('fs');
  if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
  }
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Tutorial');
  
});





 app.post('/upload',upload.single('image'), async(req, res) => {
    console.log(req.file,"filesss")
    if(!req.file){
        return res.status(400).send('No file uploaded');
    }
    console.log('File uploaded:', req.file);
     createUrl(req.file).then((response)=>{
        res.send({ message: 'File uploaded successfully!', file: req.file ,UniqUrl:response});
     })
  
});
app.get("/image",(req,res)=>{
    res.send("Img reved.....")
})
// 

app.get("/movie",(req,res)=>{
res.send(movie1)
})

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});