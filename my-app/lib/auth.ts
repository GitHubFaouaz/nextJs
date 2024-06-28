import GithubProvider from "next-auth/providers/github";
import { env } from "./env";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};
// export default NextAuth(authOptions);
// Le PrismaAdapter est utilisé dans le contexte d'authentification pour intégrer Prisma, un ORM (Object-Relational Mapping) pour Node.js, avec des bibliothèques d'authentification comme NextAuth.js. Voici une explication détaillée de son utilité et de son fonctionnement :

// Contexte d'utilisation
// Lorsque vous utilisez une bibliothèque d'authentification comme NextAuth.js dans une application Next.js, vous devez stocker et gérer les utilisateurs, les sessions, et d'autres données relatives à l'authentification. NextAuth.js prend en charge plusieurs adaptateurs pour se connecter à différentes bases de données. L'adaptateur Prisma permet à NextAuth.js de fonctionner avec Prisma pour gérer les opérations de base de données liées à l'authentification.
