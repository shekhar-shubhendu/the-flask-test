import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class FormSelect extends Component {
    render() {
        const { id, input, meta: { touched, error, warning } } = this.props
        return (
            <>
                <Form.Control id={id} as="select" {...input}>
                    <option value=''>Select Sex...</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </Form.Control>
                <div className='app-form-error'>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </>
        )
    }
}

export default FormSelect
