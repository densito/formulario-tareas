import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const taskSchema = Yup.object().shape( {
    task: Yup.string()
    .required('Task name is required'),
    isDone: Yup.string()
    .required('this camp is required')
}
);

const FormikTask = () =>{
    const initialCredentials ={
        task:'',
        isDone:''

    }

    return (
            <div>
                <h4>Task Formik</h4>
                <Formik 
                    initialValues={initialCredentials}
                    validationSchema={taskSchema}

                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                        // WE SAVE THE DATA IN THE LOCAL STORAGE
                        localStorage.setItem('credentials', values)
                      }}
                >
                    {({ touched,
                        errors,
                        isSubmitting
                    }) => (
                        <Form>
                            <label htmlFor="task">Your task</label>
                            <Field id="task" type="task" name="task" placeholder="Put your task" />
                            {
                                errors.task && touched.task && (
                                    <ErrorMessage name="task" component='div' />
                                )
                            }

                            <label htmlFor="isDone">Yes or No</label>
                            <Field id="isDone" type="isDone" name="isDone" placeholder="Your task is Done?" />
                            {
                                errors.isDone && touched.isDone && (
                                    <ErrorMessage name='isDone' component='div' />
                                )
                            }
                            <button type='submit' >Done</button>
                            {isSubmitting ? ( <p>Loading your task...</p> ) : null}
                            
                        </Form>
                    )}
                </Formik>
            </div>
        );
}



export default FormikTask;
