import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className="slack">
                <img src="./images/slack.svg" alt="Slack"/>
                <a href="#slack">slack design</a>
            </div>
            <span className="spacer"></span>
            <a href="#slack">Article</a>
            <a href="#slack">Our team</a>
            <img src="./images/smile.svg" alt="smile"/>
        </nav>
    )
}

export default Navbar