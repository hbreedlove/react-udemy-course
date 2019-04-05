//front end uses import instead of require because we can now make use of webpack/babel and ES2015 modules
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  };

  render() {
    return (
      <div className = 'container'>
        <BrowserRouter>
          <div>
            {/* path in first route is root level and is being passed as props */}
            {/* exact means when '/' is included in other paths, it will not display because it's not EXACTLY the root*/}
            <Header/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/surveys' component={Dashboard}/>
            <Route path='/surveys/new' component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);