import { api } from '@/utils/api/api';
import type { User } from '@prisma/client';
import React, { useState } from 'react';
import useSWR from 'swr';

const Index = (): JSX.Element => {
   const { data, error } = useSWR<User[]>('/api/users/list');
   const [email, setEmail] = useState('');
   const [createError, setCreateError] = useState(false);
   const [createSuccess, setCreateSuccess] = useState(false);

   const create = async () => {
      try {
         setCreateError(false);
         setCreateSuccess(false);

         await api.post<User>('/users/create', { email });
         setCreateSuccess(true);
      } catch (e) {
         setCreateError(true);
      }
   };

   if (!data) return <p>Loading...</p>;
   if (error) return <p>Error: {error}!</p>;

   return (
      <div>
         <h1>Hello world!</h1>
         <p>You are using Matthieu LOCUSSOL&apos;s starter using Typescript and Next.js!</p>
         <p>{JSON.stringify(data)}</p>
         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
         <button type="button" onClick={create}>
            Create user
         </button>
         {createError && <p>An error occurred while creating your account!</p>}
         {createSuccess && <p>Successfully created your account!</p>}
      </div>
   );
};

export default Index;
