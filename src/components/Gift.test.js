import React from 'react';
import { shallow } from 'enzyme';

import Gift from './Gift';

describe('Gift Component Tests', () => {
    const gift = shallow(<Gift />);

    it('renders correctly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('check if state has been initializes', () => {
        expect(gift.state()).toEqual({
            person: '',
            gift: ''
        })
    });

    describe('when user typing in `person` input', () => {
        const person = 'Willian';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person } });
        });

        it('update person `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });
});

