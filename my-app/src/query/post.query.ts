import { prisma } from "@/lib/prisma";
import { Prisma } from '@prisma/client';

// on a type du type de schema que lon utiliser dansla page home 
export const getLatesPosts= (userId?:string)=>  prisma.post.findMany({ //si  userId(userId?:string) il doit etre string 

    where : {
      parentId:null
      // Filtre pour ne récupérer que les posts qui n'ont pas de parent, c'est-à-dire les posts principaux.
    },
    take:20, // on prend les 20 derniers posts 
    orderBy:{ // on ordonne les posts par les plus recents
        createdAt: 'desc'
    },
 
    select : { //select: { ... }: Sélectionne les champs spécifiques à inclure dans le résultat.
      id : true,
      content : true,
      createdAt :true,
      user : { // Sélectionne des champs spécifiques de l'utilisateur qui a créé le post.
            select: {
              id: true ,
              username:true,
              image: true,
              // name:true,
            }
      },
      likes: { // Sélectionne des champs spécifiques des likes associés au post
           select:{
            userId :true,
           },
           where : { // Filtre pour ne récupérer que les likes de l'utilisateur courant (ou "error" s'il n'y a pas de session d'utilisateur).
            // userId: session?.user.id ?? "error"
            userId:userId ?? "error" 
           }
      },
      _count : { // compte le nombre de like et replies  Compte les relations associées
          select:{
            likes:true, // Compte le nombre de likes et de réponses( replies ) pour chaque post.
            replies :true,
          }
      }

    }

   })

   export type PostHome = Prisma.PromiseReturnType< typeof getLatesPosts>[number];
  // Le Prisma.PromiseReturnType<typeof getLatestPosts>[number] est une manière spécifique d'extraire le type d'un élément individuel d'un tableau retourné par une fonction asynchrone dans TypeScript.Le type retourné par cette fonction est une promesse (Promise), car prisma.post.findMany est une opération asynchrone.
  // En ajoutant [number], vous indiquez à TypeScript de prendre le type d'un élément individuel du tableau retourné par getLatestPosts.
// Par exemple, si getLatestPosts retourne un tableau de posts (Post[]), Prisma.PromiseReturnType<typeof getLatestPosts> donne le type Promise<Post[]>, et Prisma.PromiseReturnType<typeof getLatestPosts>[number] donne le type Post.
// La fonction getLatestPosts retourne une promesse qui résout un tableau d'objets post. Sans [number], TypeScript voit le type de retour comme un tableau d'objets (par exemple Promise<Post[]>), mais il ne sait pas ce qu'est un élément individuel du tableau.  LE TYPE DES ELEMENT DU TABLEAU SONT ID CONTENT USER ..... 