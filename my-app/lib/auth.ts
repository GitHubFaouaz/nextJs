import GithubProvider from "next-auth/providers/github";
import { env } from "./env";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import { AuthOptions, getServerSession } from "next-auth";



export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      profile(profile){ //une fonction profile appellé avec le profile de githup 
        console.log({profile}); //données sur le profile
        return{
          id : profile.id.toString(),
          username : profile.login,
          name: profile.name,
          email : profile.email,
         image : profile.avatar_url
        }
        
      }
    }),
  ],
  // on ajoute un id user 
  callbacks: {
      async session ({session, user}){
      // if(!session.user)return session;
      if(!session?.user)return session;// sil ny a pas de user retourne session sinon:
      session.user.id = user.id// vu que le id nexiste pas de base on ajoute un code dans le fichier nextAuth.d.ts  puisque session envoi juste nom emailet image 
      // console.log('callbackSession' , session)
      return  session 
    }
  },

};


//on recupere  les informations sur githup (nom,mail,image) 
export const getAuthSession = async ()=> {
  const session =  await getServerSession(authOptions);
 
  return session; 
}

// Le PrismaAdapter est utilisé dans le contexte d'authentification pour intégrer Prisma, un ORM (Object-Relational Mapping) pour Node.js, avec des bibliothèques d'authentification comme NextAuth.js. Voici une explication détaillée de son utilité et de son fonctionnement :

// Contexte d'utilisation
// Lorsque vous utilisez une bibliothèque d'authentification comme NextAuth.js dans une application Next.js, vous devez stocker et gérer les utilisateurs, les sessions, et d'autres données relatives à l'authentification. NextAuth.js prend en charge plusieurs adaptateurs pour se connecter à différentes bases de données. L'adaptateur Prisma permet à NextAuth.js de fonctionner avec Prisma pour gérer les opérations de base de données liées à l'authentification.
