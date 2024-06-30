// import type { DefaultSession } from 'next-auth';
import { DefaultSession, DefaultUser } from "next-auth";

// pour la session.id: 
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession['user'] & {
      /** The user's postal address. */
      id?: string;
    };
  }
}

// import { DefaultSession, DefaultUser } from "next-auth";
// import { JWT } from "next-auth/jwt";

// // Extend the DefaultUser interface
// declare module "next-auth" {
//   interface Session {
//     user?: {
//       id?: string;
//     } & DefaultSession["user"];
//   }
//   interface User extends DefaultUser {
//     id: string;
//   }
// }

// // Extend the JWT interface
// declare module "next-auth/jwt" {
//   interface JWT {
//     id?: string;
//   }
// }
