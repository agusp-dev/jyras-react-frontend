import React, { Component } from 'react'
// import firebaseApp from './firebaseApp' 

export const AuthContext = React.createContext()

class AuthProvider extends Component {

  constructor(props) {
    console.log('Auth constructor localstorage')
    super(props)
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    // firebaseApp.auth().onAuthStateChanged(user => this.setState({currentUser: user}))
    const user = localStorage.getItem('user')
    console.log('Auth componentDidMount localstorage user', user)
    this.setState({ user }) 
  }

  render() {
    const { user } = this.state
    console.log('Auth render localstorage user', user)

    return (
      <AuthContext.Provider
        value={{
          user
        }}
        > {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export { AuthProvider }