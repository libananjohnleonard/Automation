import type { Request, Response } from "express";
import prisma from "../lib/prisma.js";


// CREATE GENERATED VIDEO
export const createGeneratedVideo = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      projectId,
      videoUrl,
      status,
      resolution,
      duration
    } = req.body;


    const video = await prisma.generatedVideo.create({

      data: {

        project:{
          connect:{
            id: projectId
          }
        },

        videoUrl,
        status,
        resolution,
        duration

      }

    });


    res.status(201).json(video);


  } catch(error){

    res.status(500).json({
      message:"Failed creating generated video",
      error
    });

  }

};



// GET GENERATED VIDEOS BY PROJECT
export const getGeneratedVideosByProject = async (
  req: Request,
  res: Response
) => {

  try {

    const projectId = req.params.projectId as string;


    const videos = await prisma.generatedVideo.findMany({

      where:{
        projectId
      }

    });


    res.json(videos);


  } catch(error){

    res.status(500).json({
      message:"Failed fetching generated videos",
      error
    });

  }

};