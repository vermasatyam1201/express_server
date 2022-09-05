const carModel=require("../Models/Car")

const createCar=async(req,res) =>{
    const{company,model,registration_number}=req.body;
    const newCar= new carModel({
        company:company,
        model:model,
        registration_number:registration_number,
        userId:req.userId
    })
    try {
        const existingregistrationnumber= await carModel.findOne({registration_number:registration_number})
        if(existingregistrationnumber){
            return res.status(400).json({message:"Registration Number Already Exists"});
        }
        await newCar.save();
        res.status(201).json({message:"New Car Details Saved",newCar})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }
}

const updateCar=async(req,res) =>{
    const id=req.params.id;
    console.log(id);
    const{company,model,registration_number}=req.body;

    const newCar={
        company:company,
        model:model,
        registration_number:registration_number,
        userId:req.userId
    }
    try{
        await carModel.findByIdAndUpdate(id,newCar,{new:true});
        res.status(200).json({message:"Updated Sucessfully",newCar});

    } catch(error){
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"});
    }
    
}

const deleteCar=async(req,res) =>{
    const id=req.params.id;
    try {
        const car= await carModel.findByIdAndRemove(id);
        res.status(200).json({message:"Deleted Sucessfully",car});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"});
    }
    
}

const myCars=async(req,res) =>{
    try {
        const cars=await carModel.find({userId:req.userId})
        res.status(200).json(cars);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }
    
}

const myCarByNumber=async(req,res) =>{ 
        const registration_number=req.params.registration_number;
        try {
            const car= await carModel.find({registration_number:registration_number});
            console.log(car);
            res.status(200).json({message:"Search Sucessfully",car});
    
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Something Went Wrong"});
        }  
    
}


module.exports={
    createCar,
    updateCar,
    deleteCar,
    myCars,
    myCarByNumber
}