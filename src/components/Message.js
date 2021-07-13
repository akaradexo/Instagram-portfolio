import React from 'react';
import emailjs from 'emailjs-com';
const Message = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_ne9afzb','template_uq87bia', e.target, 'user_QQtFoMIyo5flop7JoTFNE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <>

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
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="from_name"></input>
                        <input type="Email" placeholder="Email" name="email"></input>
                        <input type="text" style={{height:"10rem"}} placeholder="Type your message here..." name="message"></input>
                        <button type="submit" >Submit</button>
                    </form>
                </div>
            </div>  
        </>
    )
}

export default Message
