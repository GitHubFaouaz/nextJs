import { PostHome } from '@/src/query/post.query';
import React from 'react';


type postProps = {
   post: PostHome
}

const post = ({post} : postProps) => {
    
    const name = post.user.name
    return (
        <div>
            post
        </div>
    );
};

export default post;