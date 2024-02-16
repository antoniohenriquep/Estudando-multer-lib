const express = require('express')
const path = require('path')

const uploadsPath = path.join (__dirname,'uploads/')
const app = express()

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,uploadsPath)
    },
    filename:(req,file,cb) =>{
        cb(null, file.originalname)
    }
})

const upload = multer({storage:storage})



app.get('/', (req,res) => {
  res.sendFile(__dirname+'/index.html')
})

app.post('/upload',upload.single('novaPlanilha'),(req,res)=>{
    //Desestrutura o atributo filename pego pelo multer
    const{filename} = req.file
    res.send(req.file.filename)
})


app.listen(3333, () => {
  console.log('Server started on http://localhost:3333')
})
