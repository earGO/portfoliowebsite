/*======================Declare all libraries and middleware and stuff ========================*/
const express = require('express'),
    app = express(),
    port = process.env.PORT || 5500,

    //controllers

    //routes

    //models

    //middleware
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    exphbs = require('express-handlebars'),
    methodOverride = require('method-override'),
    flash = require('connect-flash'),
    session = require('express-session')/*,
    passport = require('passport');*/


/*====================== Mongoose connections ========================*/
//Map global promises to get rid of warning
mongoose.Promise = global.Promise;

//DB config
const db = require('./config/database');
//connect to mongoose
mongoose.connect(db.mongoURI, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('error connecting to MongoDB\n', errs));


/*====================== Activate middleware ========================*/

app.use(express.static('public'));//use 'public'folder for custom CSS, javascript and static images
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');//views engine
app.use(bodyParser.urlencoded({extended: false})); //body-parser
app.use(bodyParser.json());//body-parser JSON
app.use(methodOverride('_method'))//override for methods ut & delete
app.use(flash());//flas messaging middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
/*//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Config for Passport
require('./config/passport')(passport);*/


/*====================== Global variables ========================*/

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
})

/*====================== Go routing!!!! ========================*/
//index route

//ABOUT route
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/project/:id',(req,res)=>{
    res.render('project')
})

//Login & authentication router

/*====================== Start an application ========================*/
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});