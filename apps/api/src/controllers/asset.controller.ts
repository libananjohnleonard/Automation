import type { Request, Response } from "express";
import prisma from "../lib/prisma.js";


// CREATE ASSET
export const createAsset = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      projectId,
      type,
      url
    } = req.body;


    const asset = await prisma.asset.create({

      data: {

        project: {
          connect:{
            id: projectId
          }
        },

        type,
        url

      }

    });


    res.status(201).json(asset);


  } catch(error){

    res.status(500).json({
      message:"Failed creating asset",
      error
    });

  }

};



// GET ASSETS BY PROJECT
export const getAssetsByProject = async (
  req: Request,
  res: Response
) => {

  try {


    const projectId = req.params.projectId as string;


    const assets = await prisma.asset.findMany({

      where:{
        projectId
      }

    });


    res.json(assets);


  } catch(error){


    res.status(500).json({
      message:"Failed fetching assets",
      error
    });


  }

};