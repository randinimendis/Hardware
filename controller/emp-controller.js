
const Emp = require("../model/Emp");

const getAllEmps = async(req,res,next)=>{
    let emps;
    try{
        emps = await Emp.find();
    }catch (err){ 
        console.log(err);
    }
    if (!emps){
        return res.status(404).json({message:"No product pound"});
    }
    return res.status(200).json({emps});
};
//add
const addEmp = async(req,res,next)=>{

    const{name,nic,gender,price,position} = req.body;
    let emp;
    try{
        emp = new Emp({
            name,
            nic,
            gender,
            price,
            position,
            
        });
        await emp.save();
        } catch (err){
            console.log(err);
        }

     if(!emp){
        return res.status(500).json({message:'Unable To Add'});
        
     }
     return res.status(201).json({emp});

    };



/*exports.getAllEmps=getAllEmps;*/
exports.addEmp=addEmp;