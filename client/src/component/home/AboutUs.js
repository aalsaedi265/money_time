import React from 'react'
import "./AboutUs.css";


function AboutUs() {
    return (
        <div>
            <h1>Meet our Founders</h1>
        
        <div className="github" style={{ color: "white" }}>
            <ul>
                <a target="_blank" href="https://github.com/aalsaedi265">Ahmed Alsaedi</a>
                <img src="https://ca.slack-edge.com/T02MD9XTF-U02T65UV1LJ-8db8dd41e386-512" alt="Ahmed Alsaedi"></img>
            </ul>
            <ul>
                <a target="_blank" href="https://github.com/wwwestin">Westin Humble</a>
                <img src="https://ca.slack-edge.com/T02MD9XTF-U02MPTDP9NE-80131365187d-512" alt="Westin"></img>
            </ul>
            <ul>
                <a target="_blank" href="https://github.com/ggclarence">Eric Van</a>
                <img src="https://ca.slack-edge.com/T02MD9XTF-U02SHANJJ8Z-789afcf3a0c2-512" alt="Eric Van"></img>
            </ul>
        </div>
        </div>
    )
}

export default AboutUs;