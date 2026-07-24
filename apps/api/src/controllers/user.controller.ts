import type { Request, Response } from "express";
import prisma from "../lib/prisma.js";


export const getUsers = async (
    req: Request,
    res: Response
) => {

    const users = await prisma.user.findMany();

    res.json(users);

};


export const createUser = async (
    req: Request,
    res: Response
) => {

    const {name,email,password} = req.body;

    const user = await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    });


    res.json(user);

};