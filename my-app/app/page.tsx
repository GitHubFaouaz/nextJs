import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  // on recupere les informations 
  const session =  await getAuthSession();
  console.log('pageSession' ,JSON.stringify (session));

  return (
    <div>
      <p>{JSON.stringify(session,null,2)}</p>
      <Button>clic 46:20</Button>
      <Input />
    </div>
  );
}
