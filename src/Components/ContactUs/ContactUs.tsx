import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactUs.css";
import football from "../../assets/4.png";
import { contactSchema } from "../../Schemas/contactSchema.ts";

type Values  = {
    name : string;
    number : string;
    message : string;
}


const joiValidate = (values: Values) => {
    const { error } = contactSchema.validate(values, { abortEarly: false });
    if (!error) return {};
    return error.details.reduce((acc: Record<string, string>, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
    }, {});
};

const ContactUs: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">

                <div className="contact-left"></div>

                <div className="contact-right">
                    <div className="contact-header">
                        <h2>
                            Contact <span className="gradient-text">Us</span>
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>

                    <Formik
                        initialValues={{ name: "", number: "", message: "" }}
                        validate={joiValidate}
                        isInitialValid={false}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Form submitted successfully:", values);
                            resetForm();
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="contact-form">
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="p"
                                        className="error"
                                    />
                                </div>

                                <div className="form-group">
                                    <Field
                                        type="tel"
                                        name="number"
                                        placeholder="Your number"
                                    />
                                    <ErrorMessage
                                        name="number"
                                        component="p"
                                        className="error"
                                    />
                                </div>

                                <div className="form-group">
                                    <Field
                                        as="textarea"
                                        name="message"
                                        rows={6}
                                        placeholder="Your message"
                                    />
                                    <ErrorMessage
                                        name="message"
                                        component="p"
                                        className="error"
                                    />
                                </div>

                                <div className="form-actions">
                                    <button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="floating-image">
                    <img src={football} alt="Contact Illustration" />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
