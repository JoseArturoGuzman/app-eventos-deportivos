import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../Hero';
import { it, expect } from 'vitest';

it('Hero se renderiza sin errores', () => {
  // Simplemente verificamos que el componente se renderice sin errores
  const { container } = render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
  
  // Verificamos que el componente exista
  expect(container).toBeTruthy();
  
  // Verificamos que haya al menos un elemento section
  const heroSection = container.querySelector('section');
  expect(heroSection).toBeTruthy();
});