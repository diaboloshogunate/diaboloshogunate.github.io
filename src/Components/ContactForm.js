import React from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
import {Col, Button, Form, Alert} from 'react-bootstrap';
import axios from 'axios';

const schema = yup.object({
    message: yup.string().required(),
    email: yup.string().email().required(),
});

function ContactForm() {
    const [isSent, setIsSent] = React.useState({submitted: false, success: false, details: {}});
    return (
        <Formik
            validationSchema={schema}
            onSubmit={async formData => {
                try {
                    const response = await axios.post('https://formspree.io/xdowzwdj', {
                        _subject: 'Website contact form submission',
                        _gotcha: formData._gotcha,
                        _replyto: formData.email,
                        message: formData.message,
                    });
                    setIsSent({submitted: true, success: true, details: response});
                } catch (error) {
                    setIsSent({submitted: true, success: false, details: error});
                }
            }}
            initialValues={{
                email: '',
                message:'',
                _gotcha: '',
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <input type="text" name="_gotcha" className="d-none" value={values._gotcha} onChange={handleChange}/>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="validationFormik02">
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="validationFormik02">
                            <Form.Label>MESSAGE</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                isInvalid={!!errors.message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit">Submit form</Button>
                    {isSent.submitted ? (isSent.success ? <Alert variant="success">Submitted!</Alert> : <Alert variant="danger">There was an error. Please email me directly at <a href="mailto:diaboloshogunate@gmail.com">diaboloshogunate@gmail.com</a></Alert>) : ''}
                </Form>
            )}
        </Formik>
    );
}

export default ContactForm;