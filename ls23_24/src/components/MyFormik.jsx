import { useState } from 'react';
import '../index.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import {object, string} from 'yup';

const userFormEnum = {
    FNAME: 'fname',
    LNAME: 'lname',
    EMAIL: 'email',
    PASS: 'pass'

}


export function MyFormik() {

    const formSchema = object({
        [userFormEnum.FNAME]: string().min(4).max(12).required('Уведіть корректне імя від 4 до 12 символів'),
        [userFormEnum.LNAME]: string().min(4).max(12).required('Уведіть корректне імя від 4 до 12 символів'),
        [userFormEnum.EMAIL]: string().email().required('Уведіть корректний імейл'),
        [userFormEnum.PASS]: string().min(8).max(12).required('Уведіть пароль від 8 до 12 символів')    
    })

    const initUserData = {
        [userFormEnum.FNAME]: '',
        [userFormEnum.LNAME]: '',
        [userFormEnum.EMAIL]: '',
        [userFormEnum.PASS]: ''
    }

    const [user, setUser] = useState({});

    const handleForma = (values) => {
        console.log(values);
        setUser(values)

    }
    
    const logRes = (d) => {
        console.log(d);
        setUser({})
    }

    return (
        <div>
            <Formik
                initialValues={initUserData}
                onSubmit={handleForma}
                onReset={logRes}
                validationSchema={formSchema}
            >
                <Form>
                    <div className='block-form'>
                        <label htmlFor={userFormEnum.FNAME}>First Name</label>
                        <Field type="text" name={userFormEnum.FNAME} id={userFormEnum.FNAME}/>
                        <ErrorMessage name={userFormEnum.FNAME}/>
                    </div>
                    <div className='block-form'>
                    <label htmlFor={userFormEnum.LNAME}>Last Name</label>   
                    <Field type="text" name={userFormEnum.LNAME} id={userFormEnum.LNAME}/>
                    <ErrorMessage name={userFormEnum.LNAME}/>
                    </div>
                    <div className='block-form'>
                    <label htmlFor={userFormEnum.EMAIL}>Email</label> 
                    <Field type="email" name={userFormEnum.EMAIL} id={userFormEnum.EMAIL} />
                    <ErrorMessage name={userFormEnum.EMAIL}/>
                    </div>
                    <div className='block-form'>
                    <label htmlFor={userFormEnum.PASS}>Password</label> 
                    <Field type="password" name={userFormEnum.PASS} id={userFormEnum.PASS} />
                    <ErrorMessage name={userFormEnum.PASS}/>
                    </div>
                    <input type="submit" />
                    <input type="reset" />
                </Form>
            </Formik>
            <hr />
            <hr />
            {JSON.stringify(user)}
        </div>
    )
}