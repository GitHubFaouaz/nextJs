import { Prisma,PrismaClient } from "@prisma/client";
import{faker} from '@faker-js/faker'

export const prisma = new PrismaClient();

// Génération de faux utilisateurs,  on installe @faker-js/faker 
const main = async () => {
  const users = []; // Tableau qui contient les utilisateurs

  for (let i = 0; i < 10; i++) {
      const user = {
          username: faker.internet.userName(),
          image: faker.image.avatar(),
          name: faker.person.firstName(),
          bio: faker.lorem.paragraph(),
          link: faker.internet.url(),
          email: faker.internet.email()
      } satisfies Prisma.UserCreateInput;

      const dbUser = await prisma.user.create({ data: user });
      users.push(dbUser);
  }

  const posts = []; // Tableau qui contient tous les posts

  for (let i = 0; i < 100; i++) {
      const randomUserIndex = faker.number.int({
          min: 0,
          max: users.length - 1,
      });

      const randomWordCount = faker.number.int({
          min: 5,
          max: 12,
      });

      const post = {
          content: faker.lorem.sentence(randomWordCount),
          userId: users[randomUserIndex].id,
      } satisfies Prisma.PostUncheckedCreateInput;

      const p = await prisma.post.create({ data: post });
      posts.push(p);
  }

  // Création de faux likes
  for (let i = 0; i < 100; i++) {
      const randomUserIndex = faker.number.int({
          min: 0,
          max: users.length - 1,
      });

      const randomPostIndex = faker.number.int({
          min: 0,
          max: posts.length - 1,
      });

      const like = {
          postId: posts[randomPostIndex].id,
          userId: users[randomUserIndex].id,
      } satisfies Prisma.LikeUncheckedCreateInput;

      await prisma.like.create({ data: like });
  }
};

// Appel de la fonction main et gestion des erreurs
main()
  .then(async () => {
      await prisma.$disconnect();
  })
  .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
  });

  // on ajoute dans la package.json dans le script : "prisma:seed" :"prisma db seed" et pour quil fonction on ajoute a la fin apres les dependences un ligne  : "prisma" : {"seed" : "npx ts-node --compiler-options {\"module\":\"commonJS\"} prisma/seed.ts"}
  
  // on install prisma studio pour avoir un etat global et detaillé des users posts .... : npx prisma studio
  // pour lancer la generation des faux users je lance le prisma seed du package.json avec : pnpm prisma:seed
  // il faut installer ts-node si necessaire : pnpm install --save-dev ts-node
  // ts-node est un outil qui permet d'exécuter du code TypeScript directement dans un environnement Node.js, sans avoir besoin de le compiler en JavaScript au préalable. Il est particulièrement utile pour les scripts et les outils de développement écrits en TypeScript.
