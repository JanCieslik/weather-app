import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Aplikacja Weather App', () => {
  it('powinna wyrenderować główny kontener', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement();
  });
});