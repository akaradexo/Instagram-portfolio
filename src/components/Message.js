import React from 'react'

const Message = () => {
    return (
        <message>

            <div className="follow">
                <h1>NEVER MISS A THING</h1>
                <div className="message">
                    <div className="thing">
                        <h2>I'D LOVE TO HEAR FROM YOU</h2>
                        <br></br>
                        <h3>FOR BUSINESS INQUIRIES</h3>
                        <p><a href="infoashu.k@gmail.com">infoashu.k@gmail.com</a></p>
                        <p>@ 2023 by Ashyou. make sure you follow me on Instagram</p>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Name"></input>
                        <input type="Email" placeholder="Email"></input>
                        <input type="text" style={{height:"10rem"}} placeholder="Type your message here..."></input>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </message>
    )
}

export default Message
