import React, { Component, Fragment } from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Form from './Form/Form';
import View from './View/View';
import Footer from './Footer';

export default class App extends Component {
  clickForm = e => {
    this.props.history.push('/form');
  };

  clickView = e => {
    this.props.history.push('/view');
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div style={{ margin: '5%' }}>
          <Switch>
            <Route exact path="/form" render={props => <Form {...props} />} />
            <Route exact path="/view" render={props => <View {...props} />} />
            <Route exact path="/" render={props => <Form {...props} />} />
          </Switch>
        </div>

        <Footer clickForm={this.clickForm} clickView={this.clickView} />
      </Fragment>
    );
  }
}
