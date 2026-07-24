import type { Request, Response } from "express";
import prisma from "../lib/prisma.js";


// CREATE SCENE

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

    order,

    script,

    duration,

    imageUrl,

    voiceUrl

}

        });


        res.status(201).json(scene);


    } catch(error){

        res.status(500).json({
            message:"Failed creating scene",
            error
        });

    }

};



// GET PROJECT SCENES

export const getScenes = async (
    req: Request,
    res: Response
)=>{

    try {


        const projectId = req.params.projectId as string;


        const scenes = await prisma.scene.findMany({

            where:{
                projectId
            }

        });


        res.json(scenes);



    } catch(error){

        res.status(500).json({
            message:"Failed fetching scenes",
            error
        });

    }

};