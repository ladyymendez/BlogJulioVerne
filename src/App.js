import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header'
import Posts from './components/Posts'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <section>
          <Header/>
          <Posts/>
        </section>
      </div>
    );
  }
}

export default App;
