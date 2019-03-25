const express = require("express");
const router = express.Router();
const brand = require("./brands");

router.get("/brands", (req, res)=>{
    brand.find({})
    .then(brand => {
        res.send(brand);
    });
});

router.post("/brands", (req, res)=>{
    brand.create(req.body)
    .then(brand => {
        res.send(brand);
    });
});

router.put("/brands/:id", (req, res)=>{
    brand.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        brand.findOne({_id: req.params.id})
        .then(brand => {
            res.send(mugger);
        });
    });
});

router.delete("/brands/:id", (req, res)=>{
    brand.deleteOne({_id: req.params.id})
    .then(brand => {
        res.send(brand);
    });
});

module.exports = router;