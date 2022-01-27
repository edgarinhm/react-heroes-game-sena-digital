import { render, screen } from '@testing-library/react';
import App from './App';
import './main/config/i18n';
import en from './assets/locales/en.json';
import { Suspense } from 'react';

describe('tests', () => {
  it('should', () => {
    render(
      <Suspense fallback={en.lbAppTitle}>
        <App />
      </Suspense>
    );
    const linkElement = screen.getByText(en.lbAppTitle);
    expect(linkElement).toBeInTheDocument();
  });
});
