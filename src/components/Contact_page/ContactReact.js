// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';

function ContactForm() {
//   const [state, handleSubmit] = useForm("xvojjrke");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
  return (
    <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xvojjrke"
            method="POST"
            className="contact-inputs">
            {/* <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            /> */}

            {/* <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            /> */}

            {/* <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea> */}



<div className="row">

<h3 style={{ textAlign: 'center' }}><b>GOT A QUESTION?</b></h3>


<p>
We’re here to help and answer any question you might have. We look forward to hearing from you!
</p>
                <div className="col-md-6 form-group">

                    
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                {/* <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div> */}
              </div>
              <div className="text-center">
  <button type="submit" style={{ backgroundColor: 'skyblue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
</div>

            {/* <input type="submit" value="send" /> */}
          </form>
        </div>
      </div>
    
  );
};



export default ContactForm;
