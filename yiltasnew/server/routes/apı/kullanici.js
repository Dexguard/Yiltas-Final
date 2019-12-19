const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/',async (req,res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});
//Add Posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        isim: req.body.isim,
        sifre: req.body.sifre
    });
    res.status(201).send();
});
//Delete Posts
router.delete('/:id', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id:new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});


async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:admin@cluster1-ihhbc.gcp.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true
});
    return client.db('yiltas').collection('kullanici');
}
    
module.exports = router;