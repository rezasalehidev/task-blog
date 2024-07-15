'use client';
import ThemeWrapper from './themeWrapper';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Container, Typography } from '@mui/material';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>
          <ThemeWrapper>
            <Container><Typography variant="h1" gutterBottom my={6}>overreacted</Typography></Container>
            {children}
          </ThemeWrapper>
        </Provider>
      </body>
    </html>
  );
}
