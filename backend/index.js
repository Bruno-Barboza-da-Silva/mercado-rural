// import express from 'express'; 
const express = require('express')
// import session from 'express-session'; 
// import fileUpload from 'express-fileupload'; 
// import fs from 'fs' 
// import cors from 'cors' 
const cors = require('cors')
// import path from 'path' 
const app = express();
app.use(express.json());
app.use(cors())

const cadastroUsuarioRouter = require('./routes/cadastroUsuario.router')

app.use("/cadastro", cadastroUsuarioRouter)

// const contactRouter = require('./routes/contactUs.router')
// const sendRouter = require("./routes/send.router")
// const managerRouter = require("./routes/manager.router")
// const updateRouter = require("./routes/update.router")



// app.use("/contact-us", contactRouter);

// app.use("/send", sendRouter);

// app.use('/manager', managerRouter);

// app.use('/update', updateRouter);





app.listen(5000, ()=>{
    console.log("aplicação rodando na porta 5000")
})
