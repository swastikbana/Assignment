import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import './View.css';

class View extends Component {
  render() {
    console.log(this.props.storedData);
    return (
      <Grid container justify="center" className="container">
        <table className="tableData">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Ph</th>
              <th>Email</th>
              <th>Pswrd</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.storedData
              ? this.props.storedData.map((dataItem, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.phone}</td>
                    <td>{dataItem.email}</td>
                    <td>{dataItem.password}</td>
                    <td>
                      {Math.round(
                        (new Date() - new Date(dataItem.lastUpdated)) / 60000
                      )}{' '}
                      minutes ago
                    </td>
                  </tr>
                ))
              : ''}
          </tbody>
        </table>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { storedData: state };
};
export default connect(mapStateToProps)(View);
