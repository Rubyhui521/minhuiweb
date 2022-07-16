import projects from '../projects'

const Code = () => {
  return (
    <div className='projects'>
        <h1>CODE</h1>
        { projects.map(project => {
            return (
                <div className='project'>
                    <img alt='' src={project.img}></img>
                    <div className='text'>
                        <h3>{project.name}</h3>
                        <ul>
                            <li>{project.description}</li>
                            <li>{project.tech}</li>
                        </ul>
                        <br></br>
                        <div className='buttons'>
                            <button><a href={project.link}>Live</a></button>
                            <button><a href={project.github}>GitHub</a></button>
                        </div>
                    </div>
                </div>
            )
        })}    
    </div>
  )
}

export default Code