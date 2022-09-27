import React from 'react';
import { postAPI } from '../server/PostService';
import PostItem from './PostItem/PostItem';
import { useState, useEffect } from 'react'
import { IPost } from '../models/IPost';
import './PostContainer.css'

const PostContainer = () => {
    const [limit, setLimit] = useState(100);

    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostsMutation()
    const [deletePost, {}] = postAPI.useDeletePostsMutation()

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])



    const handleClick = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }
    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className='headerContainer'>
                <h2>Post list</h2>
                <button className='addButton' onClick={handleClick}>Add Post</button>
            </div>

            <div>

                            {isLoading && <h1>Загрузка</h1>}
                            {error && <h1>Ошибка</h1>}
                            {posts && posts.map(post => 
                                <PostItem
                                    key={post.id}

                                    remove={handleRemove}
                                    update={handleUpdate}
                                    post={post}
                                />
                            )}
            </div>
        </div>
    );
};

export default PostContainer;