import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from "../../lib/auth"
// import { popupNotification } from '../../lib/notification'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    },
    error: false,
    username: null
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData, error: false })
    console.log(this.state)
  }

  handleSubmit = async event => {
    // event.preventDefault()
    try {
      const res = await loginUser(this.state.formData)
      setToken(res.data.token)
      this.setState({ username: res.data.username})
      this.state.history.push('/missions/')
    } catch (err) {
      this.setState({ error: true })
    }
  }

  render() {



    return (

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
                {this.state.error && <small>Sorry, incorrect information</small>}
               

                <div className="field">
                  <button 
                    disabled={!this.state.formData.email || !this.state.formData.password}
                    type="submit">
                    Login
                  </button>
                  {this.state.username && <small>Welcome</small>}
                </div>
                
              </form>
          </div>
        </div>

      </section>
    )
  }
}

export default Login