import './style.css';

if (!document.querySelector('h1')) {
    const heading = document.createElement('h1');
    heading.textContent = 'Hello, Webpack!';
    document.body.appendChild(heading);
  }