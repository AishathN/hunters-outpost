import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from "../../lib/auth"
import { Link } from 'react-router-dom'
// import { popupNotification } from '../../lib/notification'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    },
    error: false,
    username: null,
    divmessage: ''
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData, error: false })
    // console.log(this.state)
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await loginUser(this.state.formData)
      setToken(res.data.token)
      // this.setState({ username: res.data.username})
      this.setState({divmessage: res.data.message})
      // this.state.history.push('/missions')
      this.props.history.push('/missions')
    } catch (err) {
      this.setState({ error: true })
    }
  }

  render() {



    return (
      <div>

      <section className="login_style">

        <div>
          <div>
            <h2>Login</h2>
          </div>
        </div>

        <div>
          <div>
            <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      // placeholder="Email"
                      name="email"
                      className="textareabg"
                      onChange={this.handleChange}
                      value={this.state.formData.email}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      // placeholder="Password"
                      name="password"
                      className="textareabg"
                      onChange={this.handleChange}
                      value={this.state.formData.password}
                    />
                  </div>
                </div>
                {/* {this.state.error==true && <small>Sorry, incorrect information</small>} */}
               

                <div className="field">
                  <button 
                    disabled={!this.state.formData.email || !this.state.formData.password}
                    type="submit">
                    Login
                  </button>
                 
                </div>
                
              </form>
              
          </div>
        </div>
        
      </section>
      <h3>{this.state.divmessage}</h3>
      <h3>Please <Link to="/missions">browse</Link> or set a search.</h3>
      </div>
    )
  }
}

export default Login