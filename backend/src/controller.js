const schemaModel = require('./model')
const jwt = require('jsonwebtoken')

const createAccount = async (req, res) => {
    try {
        await schemaModel.create(req.body)
        return res.status(201).send("Account created Successfully")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const login = async (req, res) => {
    try {
        let { Email, Password } = req.body
        let checkExists = await schemaModel.findOne({ Email: Email, Password: Password })
        if (!checkExists) {
            return res.status(400).send("User not found")
        }
        let token = jwt.sign({ id: checkExists._id }, 'GodIsGreat')
        res.cookie('token', token, { httpOnly: true})
        return res.status(200).send("Login Succesfull")

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const add = async (req, res) => {
    try {
        let { Name, Subject, Marks } = req.body //Name,Subject,Marks
        let token = req.cookies['token']
        let verify = jwt.verify(token, 'GodIsGreat')
        let obj = {
            'Name': Name,
            'Subject': Subject,
            'Marks': Number(Marks),
            isDeleted: false
        }
        /* --------Check if the subject and name is present if yes then add the marks----- */
        let checkMarks = await schemaModel.findById(verify.id)
        let target = checkMarks.Students //array 
        for (let i = 0; i < target.length; i++) {
            if (target[i].Subject == Subject && target[i].Name == Name) {
                target[i].Marks += Number(Marks)
                let updateMarks = await schemaModel.findByIdAndUpdate(verify.id, { $set: { Students: target } }, { new: true })
                return res.status(200).send(updateMarks)
            }
        }

        /* ---------If the Subject is unique----- */
        let addStudent = await schemaModel.findByIdAndUpdate(verify.id, { $push: { Students: obj } }, { new: true })
        return res.status(200).send(addStudent)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const view = async (req, res) => {
    try {
        let token = req.cookies.token
        let verify = jwt.verify(token, 'GodIsGreat')
        let view = await schemaModel.findById(verify.id)

        let target = view.Students
        let temp = []
        for (let i = 0; i < target.length; i++) {
            if (target[i].isDeleted == false) {
                temp.push(target[i])
            }
        }
        return res.status(200).send(temp)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const viewByFilter = async (req, res) => {
    try {
        let query = req.query
        let token = req.cookies.token
        let verify = jwt.verify(token, 'GodIsGreat')
        let viewFilter = await schemaModel.findById(verify.id)

        let target = viewFilter.Students
        let temp = []
        for (let i = 0; i < target.length; i++) {
            if ((target[i].Name == query.name || target[i].Subject == query.subject) && target[i].isDeleted == false) {
                temp.push(target[i])
            }
        }
        return res.status(200).send(temp)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const update = async (req, res) => {
    try {
        let { Name, Subject, Marks } = req.body
        let token = req.cookies.token
        let verify = jwt.verify(token, 'GodIsGreat')
        let update = await schemaModel.findById(verify.id)

        let target = update.Students
        for (let i = 0; i < target.length; i++) {
            if (target[i].Name == Name && target[i].Subject == Subject && target[i].isDeleted == false) {
                target[i].Marks = Marks
            }
        }
        let finalUpdate = await schemaModel.findByIdAndUpdate(verify.id, { $set: { Students: target } }, { new: true })
        return res.status(200).send("Marks Updated Successfully")

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteData = async (req, res) => {
    try {
        let { Name, Subject } = req.body
        let token = req.cookies.token
        let verify = jwt.verify(token, 'GodIsGreat')
        let update = await schemaModel.findById(verify.id)

        let target = update.Students
        for (let i = 0; i < target.length; i++) {
            if (target[i].Name == Name && target[i].Subject == Subject) {
                target[i].isDeleted = true
            }
        }
        let finalDelete = await schemaModel.findByIdAndUpdate(verify.id,{$set:{Students:target}},{new:true})
        return res.status(200).send("Data Deleted Successfully")

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { add, login, createAccount, view, viewByFilter, update, deleteData }