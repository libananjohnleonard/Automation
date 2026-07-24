import type { Request, Response } from "express";

import prisma from "../lib/prisma.js";

import {
  generateScript
} from "../services/ai.service.js";


// GENERATE PROJECT AD
export const generateProjectAd = async (
  req: Request,
  res: Response
) => {

  try {

    const projectId = req.params.id as string;


    const project =
      await prisma.project.findUnique({

        where:{
          id: projectId
        }

      });


    if(!project){

      return res.status(404).json({
        message:"Project not found"
      });

    }


    const aiResult =
      await generateScript(
        project.title
      );


    const scenes =
      await Promise.all(

        aiResult.scenes.map(
          async(scene)=>{


            return prisma.scene.create({

              data:{

                project:{
                  connect:{
                    id:project.id
                  }
                },

                order:scene.order,

                script:scene.script,

                duration:5

              }

            });


          }

        )

      );


    res.json({

      message:"Advertisement generated",

      scenes

    });


  }catch(error){


    console.log(error);


    res.status(500).json({

      message:"Failed generating advertisement",

      error:
        error instanceof Error
        ? error.message
        : error

    });


  }

};