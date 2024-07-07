import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // on recupere les informations 
  const session =  await getAuthSession();
//   console.log('pageSession' ,JSON.stringify (session));
// on recupere tous les posts 
  const posts = await prisma.post.findMany({

     })
  return (
    <div>
      <p>ALLAH AKBAR</p>
    
    </div>
  );
}