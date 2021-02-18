const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const Job = require("../models/Job")
const { upload } = require("../config/fileupload");



router.post("/contact", (req, res) => {
  console.log(req.body);

  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    phone: req.body.phone,
    message: req.body.message,
  });
  contact
    .save()
    .then((result) => res.render("contact" , {
        contacted: true, 
        layout: "main"
    }))
    .catch((err) => console.log(err));
});


router.post("/career", (req, res) => {
  console.log(req.body);
     upload(req, res, (err) => {
    if (err) {
      // console.log(err);
      res.render("career", {
        message: err,
      });
    } else {
 let img = req.file.path;
      let reachbalePath = img.replace("public", "");

  const job = new Job({

    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    position: req.body.position,
    message: req.body.message,
    location: req.body.location,
    resume : req.body.reachbalePath,
  });
  job
    .save()
    .then((result) => res.render("career" , {
        message: "We have recieved your resume. We will reach you soon!", 
    }))
    .catch((err) => console.log(err));



    }})

});



module.exports = router;
