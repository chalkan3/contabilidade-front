import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'

import Header from '../common/template/header.jsx'
import SideBar from '../common/template/sideBar.jsx'
import Footer from '../common/template/footer.jsx'
import Messages from '../common/msg/msg.jsx'
import Routes from './Routes.jsx'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className='wrapper'>
          <Header />
          <SideBar />
          <Routes />
          <Footer />
          <Messages />
        </div>
        </HashRouter>
    )
  }
}
export default App