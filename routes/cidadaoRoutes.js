const router = require('express').Router();
const Cidadao = require('../models/Cidadao');



//Criação do Cadastro
router.post('/', async (req, res) => {


    const { nome, CPF, Endereco, Sexo } = req.body


    const cidadao = {
        nome,
        CPF,
        Endereco,
        Sexo
    }

    try {
        await Cidadao.create(cidadao)

        res.status(201).json({ message: 'Cidadao inserido com sucesso!'})


    } catch(error) {
        res.status(500).json({erro: error})
    }
})


//Leitura do Cadastro

router.get('/', async (req, res) => {
    try {
        const cidadao = await Cidadao.find()
        res.status(200).json(cidadao)

    }

    catch (error) {
        res.status(500).json({error: error })
    }
})

//Leitura com id

router.get('/:id', async(req,res) =>{

const id = req.params.id


try {
    const cidadao = await Cidadao.findOne({_id: id })


    if (!cidadao) {
        res.status(422).json({ message: 'Cidadao não encontrado!' })
        return
      }


    res.status(200).json(cidadao)

} 
catch(error) {
    res.status(500).json({ error: error })

}

})

//Atualização dos dados do Cidadão

router.patch('/:id', async(req,res) => {
    
    const id = req.params.id;

    const { nome, CPF, Endereco, Sexo } = req.body;

    const cidadao = {
        nome,
        CPF,
        Endereco,
        Sexo,
    }

    try { 

        const updateCidadao = await Cidadao.updateOne({_id: id}, cidadao)
        res.status(200).json(cidadao)

    } catch (error) {
        res.status(500).json({ erro: error})
    }
})


//Deletar dados do Usuário

router.delete('/:id', async (req, res) => {

    const id = req.params.id

    const cidadao = await Cidadao.findOne({ _id: id})

    if(!cidadao) {
        res.status(422).json({ message: 'O cidadao não foi encontrado!' })
        return
    }

    try {
        await Cidadao.deleteOne({ _id: id })
    
        res.status(200).json({ message: 'Cidadao removido com sucesso!' })

      } catch (error) {
        res.status(500).json({ erro: error })
      }
})

module.exports = router;