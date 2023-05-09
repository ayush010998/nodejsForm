const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//connection establishment 


mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB')
.then(()=>{
    console.log("connected to mongodb")
})
.catch(()=>{
    console.log("failed to connect :(")

})

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,

})

const User=new mongoose.model("User",userSchema);




//Routes

app.post('/login',(req,res)=>{
    const {email,password} =req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login Successfull",user:user})
            }else{
                res.send({message:"Password did not Match"})
            }

        }else{
            res.send({message:"User Not Registered"})
        }
    })

})

app.post('/register',(req,res)=>{
    const {name,email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already registered"})

        }else{
            const user=new User({
                name,
                email,
                password
            })
            user.save( err =>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"Successfully Registered"})
                }
            });

        }
    })
   
})

app.listen(9000,()=>{
    console.log('connection established at port 9000')
})