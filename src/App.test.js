import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './components/Home';

test('renders main little lemon heading', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const headingElement = screen.getByText('Little Lemon');
  expect(headingElement).toBeInTheDocument();
});
