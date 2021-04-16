import React, { useState } from 'react';
import { useMutation, gql, ApolloError } from '@apollo/client';
import '../styles/contacts.css';

const SEND_EMAIL_MUTATION = gql`
  mutation PostMutation($email: String!, $subject: String, $body: String!){
    sendEmail(email: $email, subject: $subject, body: $body)
  }
`;

interface form {
  email: string;
  subject: string;
  body: string;
  error?: ApolloError;
  success?: string;
}

const throttle = (func: Function, limit: number): Function => {
  let lastFunc: ReturnType<typeof setTimeout>
  let lastRan: number
  return function(this: Function) {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

function Contacts() {

  const [formState, setFormState] = useState<form>({
    email: '',
    subject: '',
    body: ''
  });

  const [sendEmail, {loading}] = useMutation(SEND_EMAIL_MUTATION, {
    variables: {
      email: formState.email,
      subject: formState.subject,
      body: formState.body
    },
    onCompleted: data => {
      setFormState({
        email: '',
        subject: '',
        body: '',
        success: data.sendEmail
      });
    },
    onError: err => setFormState({ ...formState, error: err })
  });

  const sendEmailTHR = throttle(sendEmail, 1000);

  function getForm() {
    if (loading) {
      return <h1 id='success'>Sending...</h1>
    } else if (formState.success) {
      return <h1 id='success'>{formState.success}</h1>
    } else {
      return (
        <section>
          <div className='inputGroup'>
            <label>Email</label>
            <input
              type='email'
              value={formState.email}
              onChange={(e) => setFormState({
                ...formState,
                email: e.target.value
              })}>
            </input>
          </div>
          <div className='inputGroup'>
            <label>Subject</label>
            <input
              type='text'
              value={formState.subject}
              onChange={(e) => setFormState({
                ...formState,
                subject: e.target.value
              })}>
            </input>
          </div>
          <div className='inputGroup'>
            <label>Message</label>
            <textarea
              value={formState.body}
              onChange={(e) => setFormState({
                ...formState,
                body: e.target.value
              })}>
            </textarea>
          </div>
          <button onClick={() => sendEmailTHR()} className='submit' type='submit'>Send</button>
          {
            formState.error &&
            <div style={{position:'absolute'}}>{formState.error.message}</div>
          }
        </section>
      )
    }
  }

  return (
    <div id='contact-cont'>
      <section id='contact-links'>
        <a href='https://github.com/GenaroVS' target='_blank' rel='noreferrer'>
          <i className="fab fa-github fa-lg"></i>
          <div>Github</div>
        </a>
        <a href='https://www.linkedin.com/in/genarovsalinas/' target='_blank' rel='noreferrer'>
          <i className="fab fa-linkedin fa-lg"></i>
          <div>Linkedin</div>
        </a>
        <a href='mailto:gvsalinas3@gmail.com' target='_blank' rel='noreferrer'>
          <i className="fas fa-envelope fa-lg"></i>
          <div>Gmail</div>
        </a>
      </section>
      { getForm() }
    </div>
  );
}

export default Contacts;