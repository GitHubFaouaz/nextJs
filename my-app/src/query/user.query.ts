import { getAuthSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

//on fait une fonction du pour recuperer le user  
export const getUser = async ()=> {
 
    const session = await getAuthSession()
  
    if(!session?.user.id){
      throw new Error ('User no found')
    }

    // const user = await prisma.user.findUnique({
    const user = await prisma.user.findUniqueOrThrow({ // on throw  si user nest pas connecté 
        where : {
            id : session.user.id
        }
    })
    
    return user
}