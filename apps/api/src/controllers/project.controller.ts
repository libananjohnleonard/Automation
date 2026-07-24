import type { Request, Response } from "express";
import prisma from "../lib/prisma.js";


// CREATE PROJECT
export const createProject = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      title,
      description,
      userId
    } = req.body;


    const project = await prisma.project.create({

      data: {
        title,
        description,
        userId
      }

    });


    res.status(201).json(project);


  } catch(error){

    res.status(500).json({
      message:"Failed creating project",
      error
    });

  }

};



// GET ALL PROJECTS

export const getProjects = async (
  req: Request,
  res: Response
)=>{

 try{


 const projects = await prisma.project.findMany();


 res.json(projects);



 }catch(error){

 res.status(500).json({
  message:"Failed fetching projects",
  error
 });


 }


};