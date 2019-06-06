import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component Test', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initiliazes the `state` with a empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]); 
    });

    describe('when clicking on `add gift` button', () => {
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({
                gifts: []
            });
        });

        it('check if a gift are added in the `state`', () => {
            expect(app.state().gifts).toEqual([{
                id: 1
            }]);
        });
    
        it('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });
    });
});