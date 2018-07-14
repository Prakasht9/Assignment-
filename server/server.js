const{ObjectId}=require('mongodb');

var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Dish}=require('./model/dishes');


var app=express();

app.use(bodyParser.json());

app.post('/menu',(req,res)=>{
		var item=new Dish({
			
			dish:req.body.dish,
			rate:req.body.rate
		});

		item.save().then((doc)=>{
			res.send(doc)
		},(e)=>{
			res.status(400).send(e);
		});
});


app.get('/menu',(req,res)=>{
	Dish.find().then((menu)=>{
		res.send({menu});
	},(e)=>{
		res.status(400).send(e);
	})
});

app.delete('/menu/:id',(req,res)=>{
 var id=req.params.id;

 if(!ObjectID.isValid(id).then){
 	return res.status(404).send();

 	Dish.findByIdAndRemove(id).then((dishes)=>{
 		if(!dishes){
 			return res.status(404).send();
 		}
 		res.send(dishes);
 	}).catch((e)=>{
 		res.status(404).send();
 	})
 }
});


app.listen(3000,()=>{
console.log('started on port 3000')
});