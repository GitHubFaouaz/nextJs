import { getUser } from '@/src/query/user.query';
import React from 'react';
import WritePostForm from './writePotsForm';

const write = async () => {

    const usert = getUser()

    return (
         <WritePostForm user={user} onSubmit={ async()=>{
          "use server"
         }}/>
    );
};

export default write; 