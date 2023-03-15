import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello message from backend', async () => {
  const message = 'Hello from the backend!';
  jest.spyOn(window, 'fetch').mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      text: () => Promise.resolve(message)
    });
  });

  render(<App />);

  const messageElement = await screen.findByText(message);
  expect(messageElement).toBeInTheDocument();
});
