import { createEnv } from "@t3-oss/env-nextjs";
// import { z } from "zod";
 
export const env = createEnv({
  server:{

    },
  client: {
    // PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv:{

  },
});