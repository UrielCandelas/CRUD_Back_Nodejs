import Users from '../models/users.model.js'

export const addNewUser = async (req,res)=>{
    const { name,email,password } = req.body;
    try {
        const userFound = await Users.findOne({ where: { email } });
        if (userFound) {
            return res.status(400).json([`El email ya esta registrado`])
        }
        const newUser = {
            name,
            email,
            password
        }
        const userSaved = await Users.create(newUser);
        res.status(200).json({
            id: userSaved.id,
            name: userSaved.name,
            email: userSaved.email,
        })

    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}

export const getUser = async (req,res)=>{
    const { id } = req.params;
    try {
        const userFound = await Users.findByPk(id)
        if (!userFound) {
            return res.status(400).json([`No se encontro el usuario`])
        }
        res.status(200).json({
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            password: userFound.password,
        })
    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}

export const getAllUsers = async(req,res)=>{
    try {
        const users = await Users.findAll();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}

export const editUser = async (req,res)=>{
    const { name,email,password } = req.body;
    const { id } = req.params;
    try {
        const userFound = await Users.findByPk(id)
        if (!userFound) {
            return res.status(400).json([`No se encontro el usuario`])
        }
        const newUser = {
            name,
            email,
            password
        }
        const userSaved = await Users.update(newUser,{where:{id}})
        res.json(userSaved)

    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}

export const deleteUser = async (req,res)=>{
    const { id } = req.params;
    try {
        const userFound = await Users.findByPk(id)
        if (!userFound) {
            return res.status(400).json([`No se encontro el usuario`])
        }
        const userDeleted = await Users.destroy({where: {id}})
        res.json(userDeleted)
    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}