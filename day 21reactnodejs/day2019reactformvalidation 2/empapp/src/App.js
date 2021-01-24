import React from 'react';
// import logo from './logo.svg';

import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Layout from './Component/Common/Layout/Layout.js';



import './App.css';

function App() {
    return (

      <section className="container-fluid App">
          <div className="row">
            <Layout/>
          </div>
      </section>
    );
}

export default App;
