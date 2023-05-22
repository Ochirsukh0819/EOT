const express = require('express')
const Pool = require('pg-pool')
//express iin router method iig router ruu zarlaj baiga
//tochilj bichih gj
const router = express.Router()
//ugugdliin san
const pool = new Pool({
 host: 'localhost',   
 port: 5432,
 database: 'pizzahut',
 user: 'postgres',
 password: '1234',
});



router.post('/', async (req, res)=>{
    // const formLength = formDataArray.length
    // const {email} = formDataArray[formLength-1].email;
    // const {phone} = formDataArray[formLength-1].phone;
    // const {message} = formDataArray[formLength-1].message;
  
    const {email, phone, message} = req.body
    console.log(req.body)
    // console.log(formDataArray[formLength-1].email)
    pool.query(`INSERT INTO pizzahut.feedback (email, phone, message) VALUES ($1, $2, $3)`, 
    [email, phone, message] ,(err, result)=>{
        if(err){
            console.log(err)
        }
        res.send("amjilttai bichlee")
        // console.log(result)
        //res.json(result.rows[0].json_agg)
  })})

  module.exports = router