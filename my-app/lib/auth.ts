import GithubProvider from "next-auth/providers/github";
import { env } from "./env";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import { AuthOptions, getServerSession } from "next-auth";
import { log } from "console";


// export const authOptions : AuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GithubProvider({
//       clientId: env.GITHUB_ID,
//       clientSecret: env.GITHUB_SECRET,
//     }),
   
//   ],
// };

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  // secret: env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: "jwt",
  // },
  callbacks: {
      async session ({session, user}){
      if(!session.user)return session;
      session.user.id = user.id
      return  session 
    }
  },
  // callbacks: {
  //   async session({ session, token }) {
  //     if (token?.id && session.user) {
  //       session.user.id = token.id;
  //     }
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  // },
  // debug: true,
};


//on recupere  les informations sur githup (nom,mail,image)
export const getAuthSession = async ()=> {
  const session =  await getServerSession(authOptions);
 console.log(session);
 
  return session; 
}

// Le PrismaAdapter est utilisé dans le contexte d'authentification pour intégrer Prisma, un ORM (Object-Relational Mapping) pour Node.js, avec des bibliothèques d'authentification comme NextAuth.js. Voici une explication détaillée de son utilité et de son fonctionnement :

// Contexte d'utilisation
// Lorsque vous utilisez une bibliothèque d'authentification comme NextAuth.js dans une application Next.js, vous devez stocker et gérer les utilisateurs, les sessions, et d'autres données relatives à l'authentification. NextAuth.js prend en charge plusieurs adaptateurs pour se connecter à différentes bases de données. L'adaptateur Prisma permet à NextAuth.js de fonctionner avec Prisma pour gérer les opérations de base de données liées à l'authentification.
