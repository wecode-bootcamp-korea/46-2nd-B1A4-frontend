import React, { useRef, useDispatch } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();
  const dispatch = useDispatch();

  const closeEmail = () => {
    dispatch({ type: 'CLOSE_EMAIL' });
  };

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        result => {
          alert('전송되었습니다.');
          closeEmail();
        },
        error => {
          alert('전송을 실패했습니다.');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Email;
