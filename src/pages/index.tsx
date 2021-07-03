import type { User } from '@prisma/client';
import { signIn, useSession, signOut } from 'next-auth/client';
import React from 'react';
import useSWR from 'swr';

const Index = (): JSX.Element => {
   const [session, loading] = useSession();
   const { data, error } = useSWR<User[]>('/api/users/list');

   if (!data) return <p>Loading...</p>;
   if (error) return <p>Error: {error}!</p>;

   const LoginButton = () =>
      session?.user ? (
         <>
            <p>Welcome {session.user.name}</p>
            <button type="button" onClick={() => signOut()}>
               logout
            </button>
         </>
      ) : (
         <button type="button" onClick={() => signIn()}>
            login
         </button>
      );

   return (
      <div>
         <h1>Hello world!</h1>
         <p>You are using Matthieu LOCUSSOL&apos;s starter using Typescript and Next.js!</p>
         <p>{JSON.stringify(data)}</p>
         {loading ? <p>Loading...</p> : <LoginButton />}
      </div>
   );
};

export default Index;
