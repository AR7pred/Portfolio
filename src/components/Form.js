import './FormStyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
      <form action="https://formspree.io/f/mpzgwyye"
            method="POST">
        <label>Your Name</label>
        <input type='text' name='Name' placeholder='name...' autoComplete='off' required></input>
        <label>Email</label>
        <input type='email' name='Email' placeholder='Email id....' autoComplete='off' required></input>
        <label>Phone No.</label>
        <input type='tel' name='Phone No.' placeholder='phone...' autoComplete='off' required></input>
        <label>Package</label>
        <input type='text' name='Package' placeholder='packages..' autoComplete='off'></input>
        <label>Message</label>
        <textarea rows={7} name='Message' placeholder='Write your msg here...' autoComplete='off'
         required></textarea>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
