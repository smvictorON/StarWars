import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import App from './App';

afterEach(cleanup);

describe('App', () => {
  it('Render', async () => {
    const container = render(<App/>);
    
    expect(container).toBeDefined();
  });
});