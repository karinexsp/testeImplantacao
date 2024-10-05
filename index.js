const express = requite('express')
const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Testando implantação')
})
app.listen(port,()=>{
    console.log('Aplicação rodando')
})