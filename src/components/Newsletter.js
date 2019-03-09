import React, { Component } from 'react'
import NewsletterForm from './NewsletterForm'

class Newsletter extends Component {
  render() {
    return (
      <>
        <h1>Newsletter</h1>
        <p>Sign up to get notified when I make awesome new content.</p>
        <NewsletterForm />
      </>
    )
  }
}

export default Newsletter
