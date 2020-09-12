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
    error: false
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
      // popupNotification(`welcome back ${this.state.formData.username}`)
      // this.props.history.push('/')
    } catch (err) {
      this.setState({ error: true })
    }
  }

  render() {
    return (

      <section className="login_style">

        <div>
          <div>
            <h4>Login to your account</h4>
          </div>
        </div>

        <div>
          <div>
            <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      placeholder="Email"
                      name="email"
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
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.formData.password}
                    />
                  </div>
                </div>
                {this.state.error && <small>Sorry, incorrect information</small>}

                <div className="field">
                  <button className="button"
                    disabled={!this.state.formData.email || !this.state.formData.password}
                    type="submit">
                    Login
                  </button>
                </div>
                
              </form>
          </div>
        </div>

      </section>
    )
  }
}

export default Login