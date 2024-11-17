let express=require("express")
const { update, getUser , userregister} = require("../contoller/auth")
let router=express.Router()


// ----------------Register----------
router.post('/register',userregister)

// ----------------Update----------

router.put('/update/:_id',update)
router.get('/getalluser',getUser)

module.exports=router;



