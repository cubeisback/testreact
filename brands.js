const mongoose = require("mongoose");

const questschema = mongoose.Schema(
    {
      name: String,
      photo: String,
      description: String,
      status: String
    },
    { 
      versionKey: false 
    }); 

    const questionslist = mongoose.model('brands', questschema);

    module.exports = questionslist;

// mongoose.connect('mongodb://sergey0692:89023832601k@ds227674.mlab.com:27674/ohdesign_avto', { useNewUrlParser: true }, function (err) 
// {
//   if (err) throw err;
//   console.log('Successfully connected');
// });

// var questschema = mongoose.Schema(
// {
//   name: String,
//   photo: String,
//   info: String,
//   status: String
// },
// { 
//   versionKey: false 
// });

// const questionslist = mongoose.model('brands', questschema);

// questionslist.find(function (err, questionslist) 
// {
//   console.log(questionslist);
// });