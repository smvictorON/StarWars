import React from 'react'
import { render, cleanup } from '@testing-library/react-native';
import Detail from './index';

const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            navigate: mockedNavigate,
        }),
        useRoute: () => ({
            params: {
              character: 'value',
            }
        }),
    };
});

describe('Detail', () => {
    afterEach(cleanup);
    it('Render', async () => {
        const {getByText} = render(<Detail/>)
        const element = getByText(/Veja/i)

        expect(element).toBeDefined()
    });
});
