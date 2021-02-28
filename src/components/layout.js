import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './header'
import './layout.scss'

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Computational Journalism"
      meta={[
        { name: 'description', content: 'A sample syllabus for a computational journalism course' },
        { name: 'keywords', content: 'computational journalism, data journalism' },
      ]}
    >
      <html lang="en" />
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://compjourn.com" />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
