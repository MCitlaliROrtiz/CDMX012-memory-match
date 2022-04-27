import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });

  it(' createNode is a function', () => {
    expect(typeof createNode).toBe('function');
  });
  
});
