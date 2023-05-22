//import
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
//get iin ui
/**
 * @openapi
 * /api/:
 *   get:
 *     summary: Buh baraag harah
 *     description: Buh baraag harah
 *     responses:
 *       200:
 *         description: Amjilttai baival baraag haruulna
 *       500: 
 *         description: error!
 */
// buh datag avch bga
//json bolgodog
router.get('/', (req, res)=>{
    pool.query(`SELECT json_agg(pizzahut.products.*) from pizzahut.products`, (err, result)=>{
        if(err){
            console.log(err)
        }
        // table n 0 bolj bga
        res.json(result.rows[0].json_agg)
})})

//post hiij bga ui
// /**
//  * @openapi
//  * /api:
//  *  post:
//  *     summary: Baraag postloh
//  *     requestBody:
//  *          description: Buh baraag harah
//  *          required: true
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                     properties:
//  *                        title : 
//  *                           type: string
//  *                           description: title iig avch bn
//  *                        image : 
//  *                           type: string
//  *                           description: image iig avch bn
//  *                        price : 
//  *                           type: integer
//  *                           description: price iig avch bn
//  *                        category : 
//  *                           type: string
//  *                           description: category iig avch bn
//  *     responses:
//  *       200:
//  *         description: Amjilttai baival baraag postlono
//  *       500: 
//  *         description: error!
//  */

// // post avch bn
// // requestiin body goos damjij irsen title image price iig salgaj avch bga
// // $1 n ard taliin haaltan dotorh zuiltei holbootoi
// router.post('/', (req, res)=>{
//     const {title, image, price, category} = req.body;
//     pool.query(`INSERT INTO pizzahut.products (title, image, price, category) VALUES ($1, $2, $3, $4)`, 
//     [title, image, price, category] ,(err, result)=>{
//         if(err){
//             console.log(err)
//         }
//         res.send("amjilttai bichlee")
//         // console.log(result)
//         //res.json(result.rows[0].json_agg)
// })})
//get category ui
/**
 * @openapi
 * /api/{category}:
 *   get:
 *     summary:  Baraag ugugdsun category goor haina
 *     parameters:
 *        - in: path
 *          name: category
 *          description: Baraag ugugdsun category goor haina
 *          required: true
 *          schema:
 *            type: string
 *     responses:
 *       200:
 *         description: Amjilttai baival baraag haruulna
 *       500: 
 *         description: error!
 */
// url ees category iig avch bga
//bugdiig n object bolgoj hevlehiin tuld
router.get('/:category', (req, res)=>{
    const {category} = req.params
    console.log(category)
    pool.query(`SELECT json_agg(pizzahut.products.*) from pizzahut.products where category = '${category}' `, (err, result)=>{
        if(err){
            console.log(err)
        }
        // console.log(result)
        res.json(result.rows[0].json_agg)
})})


//delete ui
/**
 * @openapi
 * /api/{id}:
 *   delete:
 *     summary: Path aar ugugdsun id aar buteegdehuuniig ustgana 
 *     parameters:
 *        - in: path
 *          name: id
 *          description: id gaar baraag hasaj baina
 *          required: true
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Amjilttai baival baraag ustgana
 *       500: 
 *         description: error!
 */
// id aar avaad
// 
router.delete('/:id', (req, res)=>{
    const {id} = req.params
    console.log(id)
    pool.query(`DELETE from pizzahut.products where id = $1 `, [id], (err, result)=>{
        if(err){
            console.log(err)
        }
        res.send(`${id} ustlaa`)
        // res.json(result.rows[0].json_agg)
})})


//update ui
/**
 * @openapi
 * /api/update/{id}:
 *   put:
 *     summary: Baraag uurchluh
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: integer
 *     requestBody:
 *          description: Update
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     properties:
 *                        title : 
 *                           type: string
 *                           description: title iig avch bn
 *                        image : 
 *                           type: string
 *                           description: image iig avch bn
 *                        price : 
 *                           type: integer
 *                           description: price iig avch bn
 *                        category : 
 *                           type: string
 *                           description: category iig avch bn
 *     responses:
 *       200:
 *         description: Amjilttai baival baraag postlono
 *       500: 
 *         description: error!
 */
// id aar avaad
// 
router.put('/update/:id', (req, res)=>{
    const {id} = req.params
    const {title, image, price, category} = req.body;
    console.log(id)

    pool.query(`UPDATE pizzahut.products SET title = $1, image = $2, price = $3, category= $4 where id = $5`, 
    [title, image, price, category, id], (err, result)=>{
        if(err){
            console.log(err)
        }
        res.send(id + 'updatelegdlee')
        // res.json(result.rows[0].json_agg)
})})


//post hiij bga ui
/**
 * @openapi
 * /api/feedback:
 *  post:
 *     summary: Feedback avah
 *     requestBody:
 *          description: Sanal huseltiig avah
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     properties:
 *                        email : 
 *                           type: string
 *                           description: email iig avch bn
 *                        phone : 
 *                           type: string
 *                           description: phone iig avch bn
 *                        message : 
 *                           type: string
 *                           description: message iig avch bn
 *     responses:
 *       200:
 *         description: Amjilttai baival baraag postlono
 *       500: 
 *         description: error!
 */
router.post('/feedback', async (req, res)=>{
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



// post avch bn
// requestiin body goos damjij irsen title image price iig salgaj avch bga
// $1 n ard taliin haaltan dotorh zuiltei holbootoi
// router.post('/feedback/', async (req, res)=>{
//     // const formLength = formDataArray.length
//     // const {email} = formDataArray[formLength-1].email;
//     // const {phone} = formDataArray[formLength-1].phone;
//     // const {message} = formDataArray[formLength-1].message;

//     const {email, phone, message} = req.body
//     console.log(req.body)
//     // console.log(formDataArray[formLength-1].email)
//     pool.query(`INSERT INTO pizzahut.feedback (email, phone, message) VALUES ($1, $2, $3)`, 
//     [email, phone, message] ,(err, result)=>{
//         if(err){
//             console.log(err)
//         }
//         res.send("amjilttai bichlee")
//         // console.log(result)
//         //res.json(result.rows[0].json_agg)
// })})





//router oo exportloj baigaa
module.exports = router