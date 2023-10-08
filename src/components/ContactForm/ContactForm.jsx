import { Formik, Field, Form } from 'formik';

const ContactForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={values => {
        onSubmitForm(values.name, values.number);
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" required />
        <label htmlFor="number">Number</label>
        <Field name="number" type="tel" required />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
