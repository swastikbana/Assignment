import React, { Component, Fragment } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import './Form.css';
import { connect } from 'react-redux';
import { storeData } from './FormSubmitAction';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      password: '',
      mesageDisplay: 'none'
    };
  }

  onChange = e =>
    this.setState({ [e.target.name]: e.target.value, mesageDisplay: 'none' });

  handleSubmit = e => {
    e.preventDefault();
    let { mesageDisplay, ...data } = this.state;
    data.lastUpdated = new Date().toLocaleString();
    console.log(this.props.storedData);
    if (this.isEmailIdExists(data.email))
      this.setState({ mesageDisplay: 'block' });
    else {
      this.props.storeData(data);

      this.setState({
        name: '',
        phone: '',
        email: '',
        password: '',
        mesageDisplay: 'none'
      });
    }
  };

  isEmailIdExists(emailId) {
    let returnValue = false;
    this.props.storedData
      ? this.props.storedData.map(dataItem => {
          if (dataItem.email === emailId) returnValue = true;

          return returnValue;
        })
      : (returnValue = false);
    return returnValue;
  }

  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid container item xs justify="center">
            <form onSubmit={this.handleSubmit}>
              <label>
                <Typography variant="h6"> Name </Typography>
                <input
                  name="name"
                  type="text"
                  className="formText"
                  required
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </label>
              <label>
                <Typography variant="h6"> Phone </Typography>
                <input
                  name="phone"
                  type="text"
                  className="formText"
                  required
                  placeholder="Enter Phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </label>
              <label>
                <Typography variant="h6"> Email </Typography>
                <input
                  name="email"
                  type="text"
                  className="formText"
                  required
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </label>
              <label>
                <Typography variant="h6"> Password </Typography>
                <input
                  name="password"
                  type="text"
                  className="formText"
                  required
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </label>

              <Grid container justify="center">
                <Typography
                  variant="subtitle1"
                  style={{
                    display: this.state.mesageDisplay,
                    marginBottom: '8%',
                    color: 'red'
                  }}
                >
                  Email id already exists
                </Typography>
              </Grid>

              <Grid container justify="center">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { storedData: state };
};

export default connect(
  mapStateToProps,
  { storeData }
)(Form);
