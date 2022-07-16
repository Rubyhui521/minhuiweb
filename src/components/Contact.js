import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className="contact">
      <h1>CONTACT</h1>
      <div>
        <p><FontAwesomeIcon icon={faUser} className="icon" />  Min Hui</p>
        <p><FontAwesomeIcon icon={faGithub} className="icon" /><a href="https://github.com/Rubyhui521">  https://github.com/Rubyhui521</a></p>
        <p><FontAwesomeIcon icon={faEnvelope} className="icon" />  ruby.hui520@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} className="icon" />  782-234-6582</p>
      </div>
    </div>
  )
}

export default Contact