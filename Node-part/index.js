const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const app = express()
const port = process.env.PORT || 5000

//middleWares
app.use(cors())
app.use(express.json())

console.log(process.env.DB_PASS, process.env.DB_USER);
const uri = `mongodb+srv://ass12:iwl4SabFlkpnMve0@cluster0.yaqej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("by_cycle_center");
        const cycles = database.collection("by_cycles");
        const orders = database.collection("orders");

        app.get("/bycycles", async (req, res) => {
            const cursor = cycles.find({});
            const result = await cursor.toArray()
            res.json(result);
        })
        app.get("/orders", async (req, res) => {
            const cursor = orders.find({});
            const result = await cursor.toArray()
            res.json(result);
        })
        app.delete("/orders", async (req, res) => {
            let id = req.body.id
            const query = { _id: ObjectId(id) };
            const result = await orders.deleteOne(query);
            res.json(result)
        })
        app.post("/getOrders", async (req, res) => {
            const email = req.body.email
            const query = { email }
            const cursor = orders.find(query);
            const result = await cursor.toArray()
            res.json(result);
        })
        app.get("/bycycles/:productId", async (req, res) => {
            const cycleId = ObjectId(req.params.productId);
            const query = { _id: cycleId };
            const result = await cycles.findOne(query);
            res.json(result)
        })
        app.post("/orders", async (req, res) => {
            const orderedByUser = req.body;
            const result = await orders.insertOne(orderedByUser);
            res.json(result);
        })


    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening`)
})