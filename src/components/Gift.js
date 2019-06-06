import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class Gift extends Component {

    state = {
        person: '',
        gift: ''
    }

    // handleChange = ({ target: { value, name }}) => {
    //     this.setState({
    //         [name]: value
    //     });
    // }
    
    render() {
        const { person, gift } = this.state

        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Person</Form.Label>
                        <Form.Control 
                            type="text" 
                            className="input-person" 
                            value={ person }
                            onChange={ ({ target: { value }}) => {
                                this.setState(prevState => ({
                                    ...prevState,
                                    person: value
                                }))
                            } } 
                        />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Gift;