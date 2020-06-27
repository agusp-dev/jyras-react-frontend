import React, { Component } from 'react'
import firebaseApp from './firebaseApp' 

export const AuthContext = React.createContext()

class AuthProvider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: undefined,
    }
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => this.setState({currentUser: user}))
  }

  render() {
    const currentUser = this.state.currentUser
    return (
      <AuthContext.Provider
        value={{
          currentUser
        }}
        > {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider 