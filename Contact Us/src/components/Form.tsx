import React, { useState } from "react";

import "./Form.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Message sent!");
  };

  return (
    <div className="form-card">
      <div className="field">
        <input
          type="text"
          id="name"
          placeholder=" "
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="name">Name</label>
      </div>

      <div className="field">
        <input
          type="email"
          id="email"
          placeholder=" "
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="field">
        <textarea
          id="message"
          rows={4}
          placeholder=" "
          value={form.message}
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
  
    </div>
  );
};

export default ContactForm;
