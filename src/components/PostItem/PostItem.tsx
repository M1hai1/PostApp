import React from 'react';
import { IPost } from '../../models/IPost';
import './PostItem.css'



interface PostItemProps {
    post: IPost;
    remove(post: IPost): void;
    update(post: IPost): void;
        
}

declare function remove(post: IPost): void
declare function update(post: IPost): void



const PostItem: React.FC <PostItemProps> = ({post, remove, update}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }
    const handleUpdate = () => {
        const title = prompt() || ''
        update({...post, title})
    }

    return (
        <div className='postItem' onClick={handleUpdate}>
            {post.id}. {post.title}
            <button className='ItemButton' onClick={handleRemove}></button>
        </div>
    );
};

export default PostItem;