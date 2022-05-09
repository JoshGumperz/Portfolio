import React from 'react'
import "./SubmitBtn.css"
import LoadingAnimation from './LoadingAnimation'

// create a button component to feed to contact-page in order to keep the contact page css from getting to complex
function SubmitBtn({ loading }) {
  // there's a slight delay after a user submits a message before email js sends it through. So in order to let the user know that the message is being sent, we use props, and a 2nd component to create a loading animation.
  return (
    <button className={!loading ? "submitBtn" : "submitLoading"}>{loading ? <LoadingAnimation/> : 'submit'}</button>
  )
}

export default SubmitBtn