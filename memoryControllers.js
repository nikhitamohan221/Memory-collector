
const Memory = require('../models/memory');

const memory_index = (req, res) => {
    Memory.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('memories/index', { title: 'All Memories', memories: result });
        })
        .catch((err) => {
            console.log(err);
        });
}

const memory_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Memory.findById(id)
        .then(result => {
            res.render('memories/details', { memory: result, title: 'Memory Details' });
        })
        .catch((err) => {
            res.status(404).render('404', { title: 'Memory not found' });
        });
}

const memory_create_get = (req, res) => {
    res.render('memories/create', { title: 'Create a new memory' });
}

const memory_create_post = (req, res) => {
    console.log(req.body);
    const memory = new Memory(req.body);

    memory.save()
        .then((result) => {
            res.redirect('/memories');
        })
        .catch((err) => {
            console.log(err);
        });
}

const memory_delete = (req, res) => {
    const id = req.params.id;

    Memory.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/memories' });
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    memory_index,
    memory_details,
    memory_create_get,
    memory_create_post,
    memory_delete
}
