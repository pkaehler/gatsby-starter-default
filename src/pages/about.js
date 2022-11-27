import * as React from 'react'
import ParentLayout from '../components/Layout/page'

const AboutPage = () => {
  return (
    <ParentLayout>
      <main>
        <h1>About Me</h1>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </main>
    </ParentLayout>
  )
}

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="this is the about page" />
  </>
)


export default AboutPage