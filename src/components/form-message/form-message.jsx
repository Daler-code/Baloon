import React from 'react';

import './form-message.styles.scss';

import { Form } from 'react-bootstrap';

import ButtonFormBack from '../button-form-back/button-form-back';
import SocialIcons from '../social-net-icons/social-net-icons';






class FormMessage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            message : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange ({target}) {
        this.setState({
            [target.name]: target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault();
        const email = this.state.email;
        const message =  this.state.message;
        
        console.log('Email: ' + email, 
                    'Message: ' + message);

    } 

    

    render() {
        return(
            <div className='message-section'> 

                <Form 
                className='message-form'
                onSubmit = {this.handleSubmit}
                >
                    <Form.Group controlId="formBasicEmail" >
                    <Form.Control 
                    className='email' 
                    type="email"
                    name='email' 
                    onChange={this.handleChange} 
                    placeholder="Email"
                    required
                    />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                    as="textarea" 
                    rows="2" 
                    className='textarea' 
                    name='message'                    
                    onChange={this.handleChange}  
                    placeholder="Message..." 
                    required
                    />
                    </Form.Group>

                    <ButtonFormBack 
                    className='button-custom' 
                    type='submit' 
                    onClick = {this.handleClick}
                    /> 
                </Form>
                <SocialIcons />
            </div>
        );
    };
};


export default FormMessage;