import './hero.css';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHands } from '@fortawesome/free-solid-svg-icons'


function Hero() {
    return (
        <>
            <section id="hero">
                <div class="hero-container">
                    <h3>Coding with passion, creating with magic !</h3>
                    <h1><FontAwesomeIcon icon={faHands} />Akory aby, I am <span>Onjatiana</span></h1>

                    <h2>
                        <Typewriter
                            options={{
                                strings: ['Digital application developer', 'Project manager', 'Scrum master'],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </h2>
                    <a href="#about" class="btn-get-started scrollto">About me</a>
                </div>
            </section>
        </>
    )
}
export default Hero;