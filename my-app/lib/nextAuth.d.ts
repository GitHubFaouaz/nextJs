import type { DefaultSession } from 'next-auth';
// par default on ajoute un id 
// pour la session.id:  ainsi on a un user par defaut
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession['user'] & { 
      id?: string; // on ajoute un id 
    };
  }
}
