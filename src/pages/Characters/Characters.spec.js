import React from 'react'
import { render, cleanup } from '@testing-library/react-native';
import Characters from './index';

describe('Characters', () => {
    afterEach(cleanup);
    it('Render', async () => {
        const {getByText} = render(<Characters/>)
        const element = getByText(/Bem-vindo!/i)

        expect(element).toBeDefined()
    });
});
