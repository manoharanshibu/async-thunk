import React, { Component } from 'react';
import {connect} from 'react-redux';
import { thunk_action_creator } from './actions/fetchAction';
import UserInfo from './components/UserInfo';

class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const userName = this.getUserName.value;
    this.props.dispatch(thunk_action_creator(userName))
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="container"> 
        <form onSubmit={this.handleSubmit} >
          <h2 className="title">Enter the Github Username</h2>
          <input type="text" ref={ input => this.getUserName = input} required placeholder="Please Input User Name" />
          <button className="button">Submit</button>
        </form>

        {this.props.data.isFetching ? <h3>Loading...</h3> : null}
        {this.props.data.isError ? (
          <h3 className="error">No such User exists.</h3>
        ) : null}
        {Object.keys(this.props.data.userData).length > 0 ? (
          <UserInfo user={this.props.data.userData} />
        ) : null}

      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapsStateToProps)(App);
