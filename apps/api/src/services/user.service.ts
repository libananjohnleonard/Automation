import prisma from "../lib/prisma.js";

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}


export const createUser = async (
  data: CreateUserInput
) => {

  const user = await prisma.user.create({
    data:{
      name:data.name,
      email:data.email,
      password:data.password
    }
  });


  return user;
};