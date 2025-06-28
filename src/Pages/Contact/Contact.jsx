import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPaperPlane } from 'react-icons/fa';

const Contact= () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',     // replace these
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setStatus('✅ Message sent successfully!');
      e.target.reset();
    }, () => {
      setStatus('❌ Failed to send. Try again later.');
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl">
        <h2 className="text-4xl font-bold text-primary text-center mb-4">Contact Me</h2>
        <p className="text-gray-700 text-center mb-8">
          Have something to say? Fill out the form below and I’ll get back to you as soon as I can.
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Write your message..."
            className="textarea textarea-bordered h-32 resize-none w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full flex justify-center items-center gap-2">
            <FaPaperPlane /> Send Message
          </button>
          {status && <p className="text-center mt-2 font-medium text-green-600">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
