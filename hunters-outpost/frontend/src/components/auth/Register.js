import React from 'react'
// import Select from 'react-select'
import { registerUser } from '../../lib/api'

class Register extends React.Component {

  state = {
    formData: {
      username: '',
      email: '',
      about_me: '',
      profile_image: '',
      password: '',
      password_confirmation: ''
    },
    errors: {}
  }



  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: ''}
    this.setState({ formData, errors })
  }

  handleSubmit = async event => {
    // event.preventDefault()
    try {
      await registerUser(this.state.formData)
      // this.props.history.push('/login')
    } catch (err) {
      console.log('error occured', err)
    }
  } 
  
  render() {
    return (

      <section className="register_style">

        <div>
          <div>
            <h2>Sign Up</h2>
          </div>
        </div>
        <div className="register-form-area">
          <div className="register-form">
            <form onSubmit={this.handleSubmit} className="box">
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                    value={this.state.formData.username}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.formData.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.formData.password}
                    onChange={this.handleChange}
                  />
                </div>
                </div>

              <div className="field">
                <label className="label">Password confirmation</label>
                <div className="control">
                  <input
                    type="password"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    value={this.state.formData.password_confirmation}
                    onChange={this.handleChange}
                  />  
                </div>
                </div>

              <div className="field">
                <label className="label">Link to profile picture</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="profile_image"
                    placeholder="www.cnn.com"
                    value={this.state.formData.profilePicture}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Bio</label>
                <div className="control">
                  <textarea
                    className="textarea input"
                    name="about_me"
                    value={this.state.formData.about_me}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <button type="submit" className="button">Sign Up</button>
              </div>

            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
