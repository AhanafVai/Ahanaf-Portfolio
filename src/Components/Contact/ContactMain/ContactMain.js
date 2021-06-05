import React from "react";

import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqldrvg");
  if (state.succeeded) {
    return (
      <p className="pt-5 contact_para">
        👋 Message sent! Thanks for getting in touch
      </p>
    );
  }
  return (
    <form className="contact_form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control bg-light"
          placeholder="Email*"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          type="text"
          className="form-control bg-light"
          name="message"
          placeholder="Comment*"
          rows="6"
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="contact_btn"
          type="submit"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

const ContactMain = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default ContactMain;
