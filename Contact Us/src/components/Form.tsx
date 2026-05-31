import React, { useState } from "react";

import "./Form.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="field">
        <input
          type="text"
          id="name"
          placeholder=" "
          value={form.name}
          onChange={handleChange}
          required
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
          required
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
          required
        />
        <label htmlFor="message">Message</label>
      </div>

      <div className="button-wrapper">
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
