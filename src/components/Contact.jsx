import React from 'react'

import "../styles/contact.scss";

const Contact = () => {
  return (
    <>
      <div className='Contact'>
        <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" placeholder='Enter your name...' />
            </div>

            <div>
              <label>Email</label>
              <input type="email" placeholder='email@gmail.com' />
            </div>


            <div>
              <label>Message</label>
              <input type="text" placeholder='Tell us about your query' required/>
            </div>


<button type='submit'>Send</button>

          </form>
        </main>
      </div>
    </>
  )
}

export default Contact;
