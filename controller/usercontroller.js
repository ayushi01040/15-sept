const users=require('../users.json');
const fs=require('fs');

function getAllUser(req,res){
    res.json(users);
}
function getParticularUser(req,res){
let id=parseInt(req.params.id);
let user=users.find((user)=>user.id===id);
res.json(user)
}
function addUser(req,res){
    req.body.id=users.length+1;
    users.push(req.body);
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end("data added");
        }
    })
}
function editUser(req,res){
    let id=parseInt(req.params.id);
    let index=users.findIndex((user)=> user.id===id);
    users[index].first_name="unknown";
    users[index].last_name="user";
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end("data updated");
        }
    })
}
function deleteUser(req,res){
    let id=req.params.id;
    let index=users.findIndex((user)=>user.id===parseInt(id));
    users.splice(index,1);

    
    
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        if(err){
            console.log("error")
        }
        else{
           
            res.end("data delete succesfully")
        }
})
}
module.exports={
    getAllUser,
    getParticularUser,
    addUser,
    editUser,
    deleteUser
    
}