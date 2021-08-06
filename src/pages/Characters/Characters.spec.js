import React from 'react'
import { render, cleanup } from '@testing-library/react-native';
import Characters from './index';

const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            navigate: mockedNavigate,
        }),
    };
});

describe('Characters', () => {
    afterEach(cleanup);
    it('Render', async () => {
        const {getByText} = render(<Characters/>)
        const element = getByText(/Bem-vindo!/i)

        expect(element).toBeDefined()
    });
});
