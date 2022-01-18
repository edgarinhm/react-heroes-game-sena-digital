import { render, screen } from '@testing-library/react';
import App from './App';

describe('tests', () => {
  it('should', () => {
    render(<App />);
    const linkElement = screen.getByText(/Taller Practico/i);
    expect(linkElement).toBeInTheDocument();
  });
});
