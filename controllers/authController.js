import userModel from "../models/userModel";

export const registerController=async()=>{
     try {
        const {name,emsil,password,phone,alarm}=req.body;
        //validation
        if(!name){
            return res.send({error:"Name is required"})
        }
         if(!email){
            return res.send({error:"email is required"})
        }
         if(!password){
            return res.send({error:"password is required"})
        }
         if(!phone){
            return res.send({error:"phone is required"})
        }
         if(!addess){
            return res.send({error:"addess is required"})
        }
        // check user
        const existinguser=await userModel.findOne({email})
        //existing user
        if(existinguser){
            return res.status(200).send({
                success:true,
                message:'already Registered please login '
            })
        }
        //register user
        const hashedPassword=await hashPassword(password)
        //save
        const usser=new userModel({
            name,email,phone,address,password:hashedPassword
        }).save()

        res.staus(201).send({
            success:true,
            message:'User Registered Successfully',
            user
        })

     } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Zamn! there are some errror in registration",
            error
        })
     }
}

