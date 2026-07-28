import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="subhead">This is a static UI — no backend wired up.</p>
        {submitted && <div className="status-banner">Thanks, {form.name || "friend"} — message received.</div>}
        <form className="form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
          <label>Message</label>
          <textarea name="message" rows={5} value={form.message} onChange={handleChange} required />
          <button className="btn" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}