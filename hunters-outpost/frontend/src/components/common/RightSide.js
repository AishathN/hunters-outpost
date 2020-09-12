import React from 'react'


class Right extends React.Component{
  state = {
    missions: []
  }


//testing fetching data
  // async componentDidMount() {
  //   try {
  //     const res = await axios.get('/api/missions')
  //     this.setState({ missions: res.data })
  //     console.log(this.state)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render(){
    return (
      <div className="right_style">
      <h1>This is the Right component</h1>
      </div>
    )
  }

}

  export default Right