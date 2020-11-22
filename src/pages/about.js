import React from 'react'
import Layout from '../components/layout'

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2 className="section-headline">About</h2>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About;