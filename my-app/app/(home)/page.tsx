import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
// import { Prisma } from '@prisma/client';
export default async function Home() {

  // on recupere les informations 
  const session =  await getAuthSession();
//   console.log('pageSession' ,JSON.stringify (session));

//s Cette partie utilise Prisma pour interroger la base de données et récupérer une liste de posts
  const posts = await prisma.post.findMany({

      where : {
        parentId:null
        // Filtre pour ne récupérer que les posts qui n'ont pas de parent, c'est-à-dire les posts principaux.
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
              }
        },
        likes: { // Sélectionne des champs spécifiques des likes associés au post
             select:{
              userId :true,
             },
             where : { // Filtre pour ne récupérer que les likes de l'utilisateur courant (ou "error" s'il n'y a pas de session d'utilisateur).
              userId: session?.user.id ?? "error"
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
  return (
    <div>
     {posts.map((p)=>(
      <p key={p.id}>{p.content}</p>
     ))}

     {/* {posts.map(p=> (
      <p key={p.id}>{p.content}</p>
     ))} */}

    
    </div>
  );
}
// Les dossiers avec des noms entre parenthèses, comme (home), sont une convention de Next.js pour indiquer que ce dossier ne doit pas affecter le chemin de la route générée.
// Cela permet d'organiser le code sans que le nom du dossier apparaisse dans l'URL.