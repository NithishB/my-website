import React from 'react'
import profile_pic from '../images/profile_pic.jpg'

class Research extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> Research </h2>
        <h3> Nithish Balachandar Moudhgalya </h3>
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <img src={profile_pic} className="img-box img-thumbnail" />
          </div>
          <div className="col-sm-6 col-md-4">
            <b>Email :</b> <a href="mailto:nithish.moudhgalya@gmail.com"> nithish.moudhgalya@gmail.com </a> <br/>
            <b>Github :</b> <a href="http://www.github.com/NithishB"> Github Profile </a> <br/>
            <b>LinkedIn :</b> <a href="http://www.linkedin.com/in/nithish-moudhgalya"> LinkedIn Profile </a> <br/>
            <b> Address : </b> 29/6, A6 Shanmugapriya Apt, Rangan Street, T-Nagar, Chennai-17, India <br/>
          </div>
        </div>
        <p> I am a Computer Science Undergraduate student from SSN College of Engineering. Hot Coffee and Chips are my favourite sidekick.</p>
        <p> I love to code, recode and maybe possibly  </p>
      </div>
    )
  }
}

export default Research
