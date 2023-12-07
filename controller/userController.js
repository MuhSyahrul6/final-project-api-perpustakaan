const { User } = require("../models")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const { Op } = require("sequelize")
const bcrypt = require('bcrypt');

dotenv.config()
const userController = {}

/*
    this is auto generate example, you can continue 

*/
userController.index = async(req,res) => {
    res.json({
        message : "Hello userController"
    })
}

userController.login = async (req, res) => {

    try {
        const { username, password } = req.body
        const findUser = await User.findOne({
            where: {
                username: {
                    [Op.like]: `%${username}%`
                }
            }
        })
        const comparePassword = await bcrypt.compare(password, findUser.password)
        if (comparePassword) {
            const payloadToken = {
                id: findUser.id,
                email: findUser.email,
                username: findUser.username,
                role: findUser.role
            }
            const token = jwt.sign(payloadToken, process.env.PRIVATE_KEY, {
                algorithm: 'HS256',
                expiresIn: '3h'
            })
            return res.status(200).json({
                data: {
                    message: "Berhasil Login !",
                    token: token
                }
            })
        } else {
            return res.status(401).json({
                data: {
                    message: "Gagal Login ! Username & Password Salah",
                }
            })
        }

    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(200).json({
                data: {
                    message: "Gagal Login !",
                    token: error.message
                }
            })
        } else {
            return res.status(200).json({
                data: {
                    message: "Gagal Login !",
                    token: error.message
                }
            })
        }
    }
}

userController.register = async (req, res) => {
    const { username, email, password, role } = req.body
    const saltRounds = 10;
    const generateSalt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, generateSalt);
    const createUser = await User.create({
        username: username,
        email: email,
        password: hashPassword,
        role: role,
        passwordSalt: generateSalt
    })
    if (!username || !email || !password || !role) {
        return res.status(400).json({
            error: 'Semua field harus diisi',
        });
    }
    return res.status(201).json({
        message: 'User Berhasil dibuat !'
    })
}

module.exports = userController

