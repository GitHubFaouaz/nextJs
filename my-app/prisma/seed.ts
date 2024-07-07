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

    const posts =[]; // tableau qui contient tous les posts

    for(let i = 0 ; i<100; i++) {
      const rondomUserIndex = faker.number.int({
        min:5,
        max : users.length -1 ,
    })
    
    const rondomWordCount = faker.number.int({
        min:5,
        max : 12 ,
    })
    
    const post = {
        content: faker.lorem.sentence(rondomWordCount),
        userdId :  users[rondomUserIndex].id,
    }satisfies Prisma.PostUncheckedCreateInput;

    
   const p =  await prisma.post.create({data:post})
   posts.push(p)
}

  // creation de faux likes
  for(let i = 0 ; i<100; i++) {
    const rondomUserIndex = faker.number.int({
      min:0,
      max : users.length -1 ,
  })
  
  const rondomPostIndex = faker.number.int({
      min:0,
      max : posts.length - 1,
  })
  
  const like = {
      content: faker.lorem.sentence(rondomPostIndex ),
      userdId :  users[rondomUserIndex].id,
  }satisfies Prisma.PostUncheckedCreateInput;

  
//  const p =  await prisma.post.create({data:post})
//  posts.push(p)
}
  
}
