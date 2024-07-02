import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
// import NextAuth from "next-auth"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"
 
// export const prisma = new PrismaClient()
 
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [],
// })