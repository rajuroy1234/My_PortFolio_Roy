import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/HOMEPAGE/Form.css';
import emailjs from '@emailjs/browser';
import { Zoom } from '@mui/material';


const Form = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Roy_PortFolio', 'template_waedhaw', form.current, 'GDfkTBYHLe33ayx3a')
      .then((result) => {
          console.log(result.text);
          alert('Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <Zoom in={true} style={{ 'transitionDelay': '200ms'}}>
      <form className="__login_form min-vw-25 rounded-3" ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Your Name</label>
          <input type="text" className="form-control min-vw-25" name='from_name' id="name" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Comments</label>
          <textarea className="form-control" rows="5" id="comment" name='message'></textarea>
        </div>
        <button type="submit" className="btn min-vw-50" style={{'background-color': '#60212E', 'color' : 'rgb(238, 236, 236)'}}>Send</button>
      </form>
      </Zoom>
    </>
  )
}

export default Form
