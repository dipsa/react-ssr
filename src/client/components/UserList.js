import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions';
import { isEmpty } from 'lodash';

class UserList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  }

  render() {
    if (isEmpty(this.props.users)) {
      return 'Loading....';
    }

    return <div>{this.renderUsers()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch);
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export { loadData };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
