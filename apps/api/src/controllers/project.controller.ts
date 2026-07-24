import type { Request, Response } from "express";
import prisma from "../lib/prisma.js";


// CREATE PROJECT
export const createProject = async (
  req: Request,
  res: Response
) => {

  try {

    console.log("USER:", req.user);


    const {
      title,
      description
    } = req.body;


    const project = await prisma.project.create({

      data: {

        title,

        description,

        userId: req.user!.id

      }

    });


    res.status(201).json(project);


  } catch(error){

    console.log(error);


    res.status(500).json({

      message:"Failed creating project",

      error: error instanceof Error 
        ? error.message 
        : error

    });

  }

};




// GET USER PROJECTS
export const getProjects = async (
  req: Request,
  res: Response
) => {

  try {


    console.log("USER:", req.user);


    const projects = await prisma.project.findMany({

      where:{

        userId:req.user!.id

      },

      orderBy:{

        createdAt:"desc"

      }

    });


    res.json(projects);


  } catch(error){


    console.log(error);


    res.status(500).json({

      message:"Failed fetching projects",

      error: error instanceof Error
        ? error.message
        : error

    });

  }

};