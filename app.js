
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const memoryRoutes = require('./routes/memoryRoutes');

const app = express();

const dbURI='mongodb+srv://netninjas:Nelapati@nodetuts.rhw6xbi.mongodb.net/'

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
   .then((result)=>app.listen(3000))
   .catch((err)=>console.log(err))
app.set('view engine','ejs');


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/add-memory',(req,res)=>{
    const memory=new Memory({
        title: 'new memory-2',
        snippet: 'about my new memory',
        body:'more about my memory'
    });

    memory.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
})       

app.get('/all-memorys',(req,res)=>{
    Memory.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
})

app.get('/single-memory',(req,res)=>{
    Memory.findById('65776425fd337347a89bc928')
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
})

app.get('/',(req,res)=>{
    res.redirect('/memories')
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
 });

app.get('/about-us',(req,res)=>{
    res.redirect('/about',{title:'About'});
});

app.use('/memories',memoryRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});


 
