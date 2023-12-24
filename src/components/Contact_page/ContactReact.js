// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [emailid, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-email', { name, emailid, subject, text });
      console.log('Server response:', response.data);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Check console for details.');
    }
  };
  return (
    <div className="container">
        <div className="contact-form">
          <div
            // action=""
            // method="POST"
            className="contact-inputs">
         

           


<div className="row">

<h3 style={{ textAlign: 'center' }}><b>GOT A QUESTION?</b></h3>


<p>
We’re here to help and answer any question you might have. We look forward to hearing from you!
</p>
                <div className="col-md-6 form-group">

                    
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    value={emailid}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                  {/* <input type="email" value={to} onChange={(e) => setEmail(e.target.value)} /> */}
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
                {/* <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} /> */}
              </div>
              <div className="form-group mt-3">
                <textarea
                value={text} onChange={(e) => setText(e.target.value)}
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
                {/* <textarea value={text} onChange={(e) => setText(e.target.value)} /> */}
              </div>
              <div className="my-3">
                {/* <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div> */}
              </div>
              <div className="text-center">
  <button type="submit" onClick={handleSendEmail} style={{ backgroundColor: 'skyblue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
</div>
 {/* <button onClick={handleSendEmail}>Send Email</button> */}

            {/* <input type="submit" value="send" /> */}
          </div>
        </div>
      </div>
    
  );
};



export default ContactForm;
