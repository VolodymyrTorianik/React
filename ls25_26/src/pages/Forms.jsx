import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Forms.css'; 

export function Forms() {
  const [formData, setFormData] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Ім'я повинно бути не менше 2 символів")
      .required("Ім'я є обов'язковим"),
    email: Yup.string()
      .email("Невірний формат електронної пошти")
      .required("Електронна пошта є обов'язковою"),
    phone: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Номер телефону має містити 10 цифр"
      )
      .required("Номер телефону є обов'язковим"),
  });

  const handleSubmit = (values) => {
    setFormData(values);
  };

  return (
    <div className="form-container">
      <h2>Форма</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form-field">
              <label htmlFor="name">Ім'я</label>
              <Field type="text" id="name" name="name" className="input" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-field">
              <label htmlFor="email">Електронна пошта</label>
              <Field type="email" id="email" name="email" className="input" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Номер телефону</label>
              <Field type="text" id="phone" name="phone" className="input" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="form-field">
              <button type="submit" disabled={isSubmitting} className="submit-button">
                Відправити
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {formData && (
        <div className="form-data">
          <h3>Дані форми:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
