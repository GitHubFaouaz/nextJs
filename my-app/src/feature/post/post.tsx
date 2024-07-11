import { PostHome } from '@/src/query/post.query';
import React from 'react';
import PostLayout from './postLayout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle } from 'lucide-react';


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
            <div className='flex gap-2 items-center'>
            <Button size='icon' variant='ghost'>
                <Heart size={20}/>
            </Button>
            <Button size='icon' variant='ghost'>
                <MessageCircle size={20}/>
            </Button>
            </div>
            <div className='flex gap-2'>
                <Link className='text-sm text-muted-foreground' href={`/posts/${post.id}`} >
                {post._count.likes} likes 
                </Link>
                <Link className='text-sm text-muted-foreground' href={`/posts/${post.id}`}>
                {post._count.replies} comments 
                </Link>
            </div>
        </PostLayout>
            
        
    );
};

export default Post;