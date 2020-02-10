import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class FormInput extends Component {
    render() {
        const { type, placeholder, input, meta: { touched, error, warning } } = this.props;
        return (
            <>
                <Form.Control value={input.value} name={input.name} type={type} placeholder={placeholder} onChange={input.onChange} />
                <div className='app-form-error'>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </>
        );
    }
}

export default FormInput;
