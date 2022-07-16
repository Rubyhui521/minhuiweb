import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faKeyboard, faHeart } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
  return (
    <div className='resume'>
        <h1>RESUME</h1>
        <div className='cards'>
            <div className='card'>
                <div className='subtitle'>
                    <h2><FontAwesomeIcon icon={faKeyboard} className="icon"/> HARD SKILLS</h2>
                </div>
                <div className='content'>
                    <ul>
                        <li><strong>Programming Languages:</strong> JavaScript, PHP, HTML/CSS, SQL</li>
                        <li><strong>Frameworks:</strong> React, VUE, Laravel, Bootstrap</li>
                        <li><strong>Tools:</strong> Git, Visual Studio Code, Firebase, Adobe XD, InDesign, Photoshop, Illustrator</li>
                    </ul>
                </div>
            </div>

            <div className='card'>
                <div className='subtitle'>
                    <h2><FontAwesomeIcon icon={faHeart} className="icon"/> SOFT SKILLS</h2>
                </div>
                <div className='content'>
                    <ul>
                        <li>A good listener with empathy</li>
                        <li>A logical and critical thinker who is problem-solving driven and therefore can always contribute in brainstorming</li>
                        <li>An easy-going teammate who is friendly, kind, positive, and humorous</li>
                    </ul>
                </div>
            </div> 

            <div className='card'>
                <div className='subtitle'>
                    <h2><FontAwesomeIcon icon={faGraduationCap} className="icon" /> EDUCATIONS</h2>
                </div>
                <div className='content'>
                    <div>
                        <h3>Algonquin College, Diploma of Interactive Media Design</h3>
                        <p>2020.01-2022.04</p>
                        <ul>
                            <li><strong>Coursework:</strong> Server-Side Web Development(A+), Web Applications(A+), Content Management Systems II(A+), Content Management Systems I(A+), Web Development III(A-), Responsive Web Design II(A), Responsive Web Design I(A)</li>
                            <li><strong>Achievements: Dean’s Honours List</strong> in Winter 2020, Spring 2020, Fall 2021, and Winter 2022.<br></br> The Dean’s Honours List recognizes students who have demonstrated academic excellence by maintaining a grade point of at least 3.60.</li>
                        </ul>
                    </div>
                    <br></br>
                    <div>
                        <h3>China Agricultural University, Bachelor’s Degree of Horticulture</h3>
                        <p>2010.09-2014.06</p>
                    </div>
                </div>
            </div>   

            <div className='card'>
                <div className='subtitle'>
                    <h2><FontAwesomeIcon icon={faBriefcase} className="icon" /> WORKING EXPERIENCE</h2>
                </div>
                <div className='content'>
                    <div>
                        <h3>Carol Studio (A small online store), Owner (Self-employed)</h3>
                        <p>2016.10-2019.11</p>
                        <ul>
                            <li>4 years of experience in B2C and B2B online retail: in charge of everything in the store from store maintenance and management to customer services</li>
                            <li>More than CAD4000 monthly net profit</li>
                            <li>More than 80% returned customers</li>
                        </ul>
                    </div>
                    <br></br>
                    <div>
                        <h3>New Oriental Education & Technology Group, Biology Teacher</h3>
                        <p>2014.10-2018.04</p>
                        <ul>
                            <li>3.5 years of Biology teaching experience; taught more than 2000 students and no customer complaint</li>
                            <li>Awarded with Excellent Teacher Prize</li>
                            <li>Responsible for writing textbooks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Resume