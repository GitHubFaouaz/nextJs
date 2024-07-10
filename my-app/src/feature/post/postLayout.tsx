import { PostHome } from '@/src/query/post.query';
import React, { PropsWithChildren } from 'react';

type PostLayoutProps = PropsWithChildren< {

    user : PostHome['user'];
    postId? : String;
    createdAt? : Date;
    className? : String;
}>

// on fait le coprs du post avec les proprietes de type PostLayoutProps 
const PostLayout = ({}: PostLayoutProps) => {

    return (
        <div>
            propsLayout
        </div>
    );
};

export default PostLayout;