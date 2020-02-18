import React from 'react'
import { Formik, Form, Field } from 'formik'

export default function Login({history}) {

    function handleSubmit(values) {
        console.log(values);
        history.push('/');
    }

    return (
        <div>
            <Formik onSubmit={handleSubmit} initialValues={{login: '', password: ''}}>
                <Form>
                    <Field placeholder="login" name='login'/>
                    <Field placeholder="password" name='password'/>
                </Form>
            </Formik>
        </div>
    )
}
