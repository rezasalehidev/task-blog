import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('renders Text Blog', () => {
    render(<Home />);
    const heading = screen.getByText(/overreacted/i);
    expect(heading).toBeInTheDocument();
});