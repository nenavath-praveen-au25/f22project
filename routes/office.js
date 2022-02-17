const router = require('express').Router()
const {
    verifyTokenAndCompany,
} = require("./token");

router.post('/workinghour', verifyTokenAndCompany, async(req, res) => {
    try {
        const worker = await detail.findById({
            userId: req.body.userid
        })
        const workinghour = worker.workinghour
        res.send(workinghour)
    } catch (err) {
        res.send(err)
    }
})








module.exports = router;