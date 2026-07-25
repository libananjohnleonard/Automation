import prisma from "../lib/prisma.js";


export const createAsset = async (
  projectId:string,
  type:string,
  url:string
) => {


  return prisma.asset.create({

    data:{

      projectId,

      type,

      url

    }

  });


};