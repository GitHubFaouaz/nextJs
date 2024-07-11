import { PostHome } from '@/src/query/post.query';
import React from 'react';
import PostLayout from './postLayout';
import Link from 'next/link';


type postProps = {
   post: PostHome
}

const Post = ({post} : postProps) => {
    
    // const name = post.user.name 
    return (
         <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
            <Link href={`/posts/${post.id} `} className='text-sm text-foreground'>
            {post.content}
            </Link>
        </PostLayout>
            
        
    );
};

export default Post;