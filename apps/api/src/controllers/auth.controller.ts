import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";
import {
  JWT_SECRET,
  JWT_EXPIRES_IN
} from "../config/jwt.js";


// REGISTER
export const register = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;


    const existingUser =
      await prisma.user.findUnique({
        where:{
          email
        }
      });


    if(existingUser){

      return res.status(400).json({
        message:"Email already exists"
      });

    }


    const hashedPassword =
      await bcrypt.hash(password,10);


    const user =
      await prisma.user.create({

        data:{
          name,
          email,
          password: hashedPassword
        }

      });


    res.status(201).json({

      id:user.id,
      name:user.name,
      email:user.email

    });


  } catch(error){

    res.status(500).json({
      message:"Registration failed",
      error
    });

  }

};




// LOGIN
export const login = async (
  req: Request,
  res: Response
)=>{


  try{


    const {
      email,
      password
    } = req.body;



    const user =
      await prisma.user.findUnique({

        where:{
          email
        }

      });



    if(!user){

      return res.status(401).json({
        message:"Invalid credentials"
      });

    }



    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );



    if(!validPassword){

      return res.status(401).json({
        message:"Invalid credentials"
      });

    }



const token =
  jwt.sign(

    {
      id:user.id,
      email:user.email
    },

    JWT_SECRET,

    {
      expiresIn: JWT_EXPIRES_IN
    }

  );



    res.json({

      token,

      user:{
        id:user.id,
        name:user.name,
        email:user.email
      }

    });



  }catch(error){


    res.status(500).json({

      message:"Login failed",

      error

    });


  }


};