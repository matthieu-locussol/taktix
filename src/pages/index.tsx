import type { User } from '@prisma/client';
import { signIn, signOut, useSession } from 'next-auth/client';
import React from 'react';
import useSWR from 'swr';
import { Button } from '../components/Button';
import { fetcher } from '../utils/api/api';

const Index = (): JSX.Element => {
   const [session, loading] = useSession();
   const { data, error } = useSWR<User[]>('/users/list', fetcher);

   if (!data) return <p>Loading...</p>;
   if (error) return <p>Error: {error}!</p>;

   const LoginButton = () =>
      session?.user ? (
         <>
            <p>Welcome {session.user.name}</p>
            <Button variant="secondary" onClick={() => signOut()}>
               logout
            </Button>
         </>
      ) : (
         <Button data-cy="login" onClick={() => signIn()}>
            login
         </Button>
      );

   return (
      <div>
         <h1 className="text-3xl font-bold text-blue-500">Hello world!</h1>
         {loading ? <p>Loading...</p> : <LoginButton />}
      </div>
   );
};

export default Index;
