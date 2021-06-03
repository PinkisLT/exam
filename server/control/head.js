const userDb = require('../schemas/userSchema')

module.exports = {
    addUser: (req, res) => {
        const {
            name,
            age,
            email,
            password
        } = req.body

        const users = new userDb()
        users.name = name
        users.age = age
        users.email = email
        users.password = password


        users.save().then(data => {
            res.send({success: true})
        })
    },
    getSingleUser: async (req, res) => {

        const user = await userDb.findOne({_id: req.params.id })
        res.send({success: true, user})
    },
        getUsers: async (req, res) => {
            const users = await userDb.find()
            res.send({success: true, users})
    },
    deleteUser: async (req, res) => {
        const { id } = req.params
        await userDb.findOneAndDelete({_id: id})
        const users = await userDb.find()
        res.send({success: true, users})
    },}