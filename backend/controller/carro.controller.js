const Carro = require('../models/Carro')

const cadastrar = async (req, res) => {
    const { nome, marca, categoria, ano, precoFab } = req.body

    let precoVend
    if (categoria === 'popular') {
        precoVend = precoFab * 1.15
    } else if (categoria === 'sedan') {
        precoVend = precoFab * 1.20
    } else if (categoria === 'luxo') {
        precoVend = precoFab * 1.25 
    } else {
        return res.status(400).json({ message: "Categoria inválida" })
    }

    const valores = { nome, marca, categoria, ano, precoFab, precoVend }
    console.log(valores)

    try {
        await Carro.create(valores)
        res.status(201).json({ message: "Dados do carro cadastrados com sucesso" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Não foi possível cadastrar os dados do carro" })
    }
}

const listar = async (req, res) => {
    try {
        const carro = await Carro.findAll()
        res.status(201).json(carro)
    } catch (err) {
        res.status(500).json({ message: 'não foi possível listar os dados do carro' })
    }
}

const consultar = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const dado = await Carro.findOne({ where: { codCarro: id } })
        if (!dado) {
            res.status(404).json({ message: 'carro não encontrado' })
        } else {
            res.status(200).json(dado)
        }
    } catch (err) {
        res.status(500).json({ message: 'erro ao consultar o carro' })
        console.error('erro ao consultar o carro')
    }
}

const apagar = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const dado = await Carro.findOne({ where: { codCarro: id } })
        if (!dado) {
            res.status(404).json({ message: 'carro não encontrado' })
        } else {
            await Carro.destroy({ where: { codCarro: id } })
            res.status(200).json({ message: 'carro exluido com sucesso' })
        }
    } catch (err) {
        res.status(500).json({ message: 'erro ao excluir o carro' })
        console.error('erro ao excluir o paciente', err)
    }
}

module.exports = { cadastrar, listar, consultar, apagar }