import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

class App extends Component {

    state = {
        gifts: []
    }

    addGift = () => {
        const { gifts } = this.state;

        const ids = this.state.gifts.map(gift => gift.id);

        const max_id = ids.length > 0 ? Math.max(...ids) : 0;

        gifts.push({
            id: max_id + 1
        });

        this.setState(prevState => ({
            ...prevState,
            gifts
        }))
    }

    render() {
        const { gifts } = this.state

        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    { gifts.map(gift => (
                        <div key={ gift.id }>{ gift.id }</div>
                    )) }
                </div>
                <Button className="btn-add" onClick={ this.addGift }>Adicionar Presente</Button>
            </div>
        )
    }
}

export default App;