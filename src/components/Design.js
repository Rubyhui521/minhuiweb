import DesignGraphic from './DesignGraphic'
import { useState } from 'react'
import DesignUI from './DesignUI'
import DesignBranding from './DesignBranding'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

const Design = () => {
  const [isToggledOne, setIsToggledOne] = useState(false)
  const [isToggledTwo, setIsToggledTwo] = useState(false)
  const [isToggledThree, setIsToggledThree] = useState(false)
  return (
    <div className='design'>
      <h1>DESIGN</h1>
      <div className='button'><FontAwesomeIcon icon={faHandPointRight} className='icon' /><button onClick={() => setIsToggledOne(!isToggledOne)}><h2>Graphic Design</h2></button></div>
      { isToggledOne && <DesignGraphic />}

      <div className='button'><FontAwesomeIcon icon={faHandPointRight} className='icon' /><button onClick={() => setIsToggledTwo(!isToggledTwo)}><h2>Branding</h2></button></div>
      { isToggledTwo && <DesignBranding />}

      <div className='button'><FontAwesomeIcon icon={faHandPointRight} className='icon' /><button onClick={() => setIsToggledThree(!isToggledThree)}><h2>UI Design</h2></button></div>
      { isToggledThree && <DesignUI />}
    </div>
  )
}

export default Design