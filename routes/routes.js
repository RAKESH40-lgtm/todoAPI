const express = require('express')
const todoModal= require("./models/todo-modal")
const router = express.Router()
router.post("/add", (req, res) => {
    todoModal.create({
        todos: req.body.todos
    }).then((data) => {
        res.status(200).send({ status: "Successfully added Activity" })
    })
});

router.get("/fetch", (req, res) => {
    todoModal.find().then((data) => {
        res.status(200).send({ todo_Data: data })
    }).catch((err) => {
        res.status(400).send(err.message)
    })
});
router.put('/update/:id', (req, res) => {
    const todo = todoModal.find({ _id: req.params.id })
    if (todo) {
        todoModal.updateMany({ activity: req.params.activity }, req.body).then((data) => {
            res.status(200).send("status updated")
        })
    } else {
        res.status(400).send("invalid input")
    }
})
router.delete("/delete/:id", (req, res) => {
    todoModal.deleteOne({ _id: req.params.id }).then((todo) => {
        res.status(200).send("Todo Activity is Deleted")
    }).catch((err) => {
        res.status(400).send("Not find todo data")
    })
});

exports.default = router