import React from 'react'
import Layout from '../components/layout'

class Contact extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2 className="section-headline">Contact</h2>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact;