import type { Request, Response } from "express";
import prisma from "../lib/prisma.js";


// =====================================
// CREATE SCENE
// POST /scenes
// =====================================
export const createScene = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      projectId,
      script,
      duration,
      imageUrl,
      voiceUrl,
      order
    } = req.body;


    const scene = await prisma.scene.create({

      data: {

        project: {
          connect: {
            id: projectId
          }
        },

        script,

        duration: duration ?? 5,

        imageUrl,

        voiceUrl,

        order

      }

    });


    res.status(201).json(scene);


  } catch (error) {

    console.error(error);

    res.status(500).json({

      message: "Failed creating scene",

      error

    });

  }

};




// =====================================
// GET SCENES BY PROJECT
// GET /scenes/project/:projectId
// =====================================
export const getScenesByProject = async (

  req: Request,

  res: Response

) => {


  try {


    const projectId = req.params.projectId as string;


    const scenes = await prisma.scene.findMany({

      where: {

        projectId

      },

      orderBy: {

        order: "asc"

      }

    });


    res.json(scenes);


  } catch(error) {


    console.error(error);


    res.status(500).json({

      message: "Failed fetching scenes",

      error

    });


  }


};