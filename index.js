const express = require('express');

const app = express();

const mongoose = require('mongoose');



//forma de ler json
app.use(
    express.urlencoded(
        {
            extended: true
        }),
)


app.use(express.json())

//rotas da Api

const cidadaoRoutes = require('./routes/cidadaoRoutes');

app.use('/cidadao', cidadaoRoutes)


//rota de inicial
app.get('/', (req, res) => {

    res.json({message: 'Oie Express!'})
})


// Conexão com o MongoDB
mongoose
   .connect(
    'mongodb+srv://ehrikaster:EMg260u88KQmQ5Gw@cluster0.z2djtd0.mongodb.net/?retryWrites=true&w=majority'
    )

    .then(() => {
        console.log('Conectado ao MongoDB.');
        app.listen(3000)
  })
    .catch((error) => {
        console.error('Erro ao conectar ao MongoDB:', error);
  });

