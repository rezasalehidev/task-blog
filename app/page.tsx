'use client';

import { useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Switch, CircularProgress, Box } from '@mui/material';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { toggleTheme } from '@/app/redux/themeReducer';
import { fetchPosts } from '@/app/redux/postsReducer';

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      {
        loading ? <CircularProgress /> :
          <>
            <Box display="flex" alignItems="center">
              <Switch
                checked={darkMode}
                onChange={() => dispatch(toggleTheme())}
                inputProps={{ 'aria-label': 'toggle theme' }}
              />
              <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>{darkMode ? 'Dark Mode' : 'Light Mode'}</Typography>
            </Box>
            <List>
              {posts.map((post, index) => (
                <ListItem key={post.id} component={Link} href={`/post/${post.id}`} style={{ marginBottom: '1.5em' }} disableGutters
                  sx={{
                    marginBottom: '1.5em',
                    transition: 'transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.01)',
                      filter: 'blur(0.05px)',
                    },
                  }}
                >
                  <ListItemText
                    primary={<Typography variant="h6" sx={{ color: index === 0 || index === 1 ? '#f4669e' : '' }}>{post.title}</Typography>}
                    secondary={
                      <>
                        <Typography variant="body2">{post.date}</Typography>
                        <Typography variant="body1">{post.body.substring(0, 50)}...</Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </>
      }
    </Container>
  );
};

export default HomePage;
