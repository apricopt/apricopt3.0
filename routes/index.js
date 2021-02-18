const express = require("express");
const router = express.Router();
const flash = require("connect-flash");


router.get("/" , (req ,res) => {
    res.render("index" , {
        title : "Apricopt | Home"
    })
})


// router.get("/about" , (req ,res) => {
// res.render("about")
// })

router.get("/contact" , (req ,res) => {
    res.render("contact" , {
        title: "Apricopt | Contact"
    })
})

router.get("/career" , (req ,res) => {
    res.render("career" , {
        title: "Apricopt | Jobs "
    })
})
router.get("/serviceapplication" , (req ,res) => {
    res.render("service-application" , {
        title : "Apricopt | App Dev"
    })
})
router.get("/websitedevelopment" , (req ,res) => {
    res.render("service-web" , {
        title : "Apricopt | Web Dev"
    })
})
router.get("/servicesolar" , (req ,res) => {
    res.render("service-solar" , {
        title : "Apricopt | Solar"
    })
})
router.get("/servicelead" , (req ,res) => {
    res.render("service-lead" , {
        title : "Apricopt|FE"
    })
})
router.get("/serviceecom" , (req ,res) => {
    res.render("service-ecom" , {
        title : "Apricopt | Ecommerce"
    })
})
router.get("/servicesocial" , (req ,res) => {
    res.render("service-social" , {
        title : "Apricopt | Ecommerce"
    })
})
module.exports = router;
