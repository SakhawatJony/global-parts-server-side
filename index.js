const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();


// middleware 

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xwxsr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const globalPartsCollection = client.db('globalParts').collection('parts')

    }
    finally{

    }
}

run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Running Global Parts Center Server Site')


});

app.listen(port, () => {
    console.log('Listening to port', port)

})

