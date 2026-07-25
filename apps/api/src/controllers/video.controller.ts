import type { Request, Response } from "express";

import prisma from "../lib/prisma.js";

import { generateVideo } from "../services/video.service.js";


// GENERATE VIDEO
export const createVideo = async (
  req: Request,
  res: Response
) => {


  try {


    const projectId =
      req.params.id as string;



    const project =
      await prisma.project.findUnique({

        where:{
          id: projectId
        },

        include:{
          scenes:true
        }

      });



    if(!project){

      return res.status(404).json({

        message:"Project not found"

      });

    }



    const video =
      await generateVideo(
        project.scenes
      );



    const generatedVideo =
      await prisma.generatedVideo.create({

        data:{

          projectId: project.id,

          videoUrl: video.url

        }

      });



    res.status(201).json({

      message:"Video generated",

      generatedVideo

    });



  }catch(error){


    console.log(error);


    res.status(500).json({

      message:"Failed generating video",

      error:
        error instanceof Error
        ? error.message
        : error

    });


  }


};