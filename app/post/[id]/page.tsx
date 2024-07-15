'use client';

import { useEffect, useState } from 'react';
import { CircularProgress, Container, Typography } from '@mui/material';
import request from '@/app/lib/request';

interface Post {
    id: number;
    title: string;
    body: string;
    date: string;
}

const PostPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);

        const fetchPost = async () => {
            try {
                const response = await request.get(`/posts/${id}`);
                const data = response.data;
                const postWithDate = {
                    ...data,
                    date: new Date(Date.now() - data.id * 86400000).toISOString().split('T')[0],
                };
                setPost(postWithDate);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
            setLoading(false);
        };
        fetchPost();
    }, [id]);

    return (
        <Container>
            {
                loading ? <CircularProgress /> :
                    <>
                        <Typography variant="h2" gutterBottom>{post?.title || "Not Found"}</Typography>
                        <Typography variant="subtitle1" gutterBottom>{post?.date}</Typography>
                        <Typography variant="body1">{post?.body}</Typography>
                    </>
            }
        </Container>
    );
};

export default PostPage;
