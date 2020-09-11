import React from 'react'
import { createMission } from '../../lib/api'
import MissionForm from './MissionForm'
// import { popupNotification } from '../../lib/notification'

class MissionNew extends React.Component {
  state = {
    formData: {
      name: '',
      description: '',
      category: [],
      image: ''
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }
  
  handleMultiChange = selected => {
    const selectedItems = selected ? selected.map(item => item.value) : []
    const formData = { ... this.state.formData, category: selectedItems}
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createMission(this.state.formData)
      // popupNotification('You have successfuly added a new mission')
      // this.props.history.push(`/missions/${res.data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {

    console.log(this.state)
    return (
      <section>

        <div className="hero-gigs-indv text-center">
          <div className="hero-gigs-indv-txt">
            <h2>Create a new mission</h2>
          </div>
        </div>
            <MissionForm 
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              handleMultiChange={this.handleMultiChange}
              formData={this.state.formData}
              buttonText="Deploy"/> 
      </section>
    )
  }
}

export default MissionNew