import React from 'react';
import '../styles/contacts.css';

function Contacts() {
  return (
    <section id='contact-cont'>
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
  );
}

export default Contacts;