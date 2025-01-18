import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

  // Test 1: App renders without crashing
  test('renders without crashing', () => {
    render(<App />);
  });

  // Test 2: Verify that App renders a div with the class App-header
  test('renders a div with the class App-header', () => {
    render(<App />);
    const headerDiv = screen.getByClassName('App-header');
    expect(headerDiv).toBeInTheDocument();
  });

  // Test 3: Verify that App renders a div with the class App-body
  test('renders a div with the class App-body', () => {
    render(<App />);
    const bodyDiv = screen.getByClassName('App-body');
    expect(bodyDiv).toBeInTheDocument();
  });

  // Test 4: Verify that App renders a div with the class App-footer
  test('renders a div with the class App-footer', () => {
    render(<App />);
    const footerDiv = screen.getByClassName('App-footer');
    expect(footerDiv).toBeInTheDocument();
  });
});
