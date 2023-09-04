require('dotenv').config();
const express =require('express');
const app =express();
const cors = require('cors');
const connection =require('./db')
const userroutes =require('./router/user')
const authroutes =require('./router/auth')

connection();

app.use(express.json());
app.use(cors());



app.use('/api/user',userroutes);
app.use('/api/auth',authroutes)

const port =process.env.PORT||8000;
app.listen(port,()=>console.log('server is running'))