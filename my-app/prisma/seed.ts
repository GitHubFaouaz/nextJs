import { Prisma,PrismaClient } from "@prisma/client";
import{faker} from '@faker-js/faker'

export const prisma = new PrismaClient();

// on va generer de faux user  on installe @faker-js/faker 
const main = ()=>{
   const users =[];// on fait un tableau qui contient les users

    for(let i = 0; 0< 10; i++ ){
         const user = {
            username : faker.internet.userName(),
            image :faker.image.avatar(),
            name: faker.person.firstName(),
            bio : faker.lorem.paragraph(),
            link:faker.internet.url(),
            email:faker.internet.email()
         }satisfies Prisma.UserCreateInput

         const dbUser = prisma.user.create({data:user})

         users.push(dbUser)
    }

    for(let i = 0 ; i<100; i++) {
     
    }
}
