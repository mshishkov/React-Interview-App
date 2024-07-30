import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('Is App run', () => {
  render(<App />);
  expect(screen.getByText(/Pokemons Battle Simulator/i)).toBeInTheDocument();
});