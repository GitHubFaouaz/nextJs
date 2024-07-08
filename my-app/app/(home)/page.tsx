import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // on recupere les informations 
  const session =  await getAuthSession();
//   console.log('pageSession' ,JSON.stringify (session));
// on recupere tous les posts 
  const posts = await prisma.post.findMany({
      where : {
        parentId:null
      },

      select : {
        id : true,
        content : true,
        createdAt :true,
          user : {
              select: {
                id: true ,
                username:true,
                image: true,
              }
          },
          likes: {
             select:{
              userId :true,
             },
             where : {
              userId: session?.user.id ?? "error"
             }
          },
          _count : { // compte le nombre de like et replies 
            select:{
              likes:true,
              replies :true,
            }
          }

      }
     })
  return (
    <div>
     {posts.map( p => (
    //  <p key={p.id}>{p.user.username}</p>
     <p key={p.id}>{p.content}</p>
     ))}
    
    </div>
  );
}