import React from 'react';
import logo from './logo.svg';
import HelloWorld from './Components/HelloWorld.js'
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
       <Header />
       <Footer />
    </div>
    // <div className="App">
    //   <Header />
    //   { {<HelloWorld  name="kevin" />} }
    //   { <CounterExample /> }
    // </div>
  );
}

export default App;
