import type { Request, Response } from "express";

import prisma from "../lib/prisma.js";

import { generateScript } from "../services/ai.service.js";
import { generateImage } from "../services/image.service.js";
import { generateVoice } from "../services/voice.service.js";


// GENERATE PROJECT AD
export const generateProjectAd = async (
  req: Request,
  res: Response
) => {

  try {

    const projectId = req.params.id as string;


    const project = await prisma.project.findUnique({

      where: {
        id: projectId
      }

    });


    if (!project) {

      return res.status(404).json({
        message: "Project not found"
      });

    }


    // Generate AI script
    const aiResult = await generateScript(
      project.title
    );


    const scenes = await Promise.all(

      aiResult.scenes.map(
        async (scene) => {


          // Generate image
          const image = await generateImage(
            scene.script
          );


          // Generate voice
          const voice = await generateVoice(
            scene.script
          );


          // Save scene
          return prisma.scene.create({

            data: {

              project: {
                connect: {
                  id: project.id
                }
              },


              order: scene.order,


              script: scene.script,


              duration: 5,


              imageUrl: image.url,


              voiceUrl: voice.url

            }

          });


        }

      )

    );


    res.json({

      message: "Advertisement generated",

      scenes

    });


  } catch (error) {


    console.log(error);


    res.status(500).json({

      message: "Failed generating advertisement",

      error:
        error instanceof Error
          ? error.message
          : error

    });


  }

};