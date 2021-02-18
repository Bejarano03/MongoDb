const router = require("express").Router();
const path = require("path");


router.get("/exercise", (req, res) => {

    req.sendFile( path.join(___dirname, "../public/exercise.html" ) );

})

module.exports = router; 