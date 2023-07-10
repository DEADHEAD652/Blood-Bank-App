const express = require('express')

const app = express()



//routes
app.get('/test' , (req,res) =>{


    res.status(200).send("halo9")
})

const port = process.env.PORT || 5001

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})