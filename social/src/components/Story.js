import React from 'react'
import '../App.css';
import Image from '../components/images/banner.jpg';
const Story = () => {
    return (
        
        <story>
            <div className="about">
                <div className="read">
                    <h1>This is </h1><h1 style={{fontStyle: "italic"}}>My story</h1>
                    <p style={{padding:"1rem"}}>I have always been inclined towards fashion. When Instagram was new, I wanted to make an account on it like everyone else. I spent way too much time on social media when I first started. It was time that was not used wisely and that i wouldn’t see again,but from that I have a unique view that no one else. From browsing an instagram i saw a post of Toni Gabriel Mahfud .He is a German model, artist, photographer and social media influencer and I got inspired from his content. I have an urban and unique style to go.</p>
                    
                    <p style={{fontStyle: "italic",color:"white",background:"black",borderRadius:"2rem",padding:"1rem"}} >This is a message from me to you. I want you to understand that everything you see on social media and everything you hear is not real life. Before you see all beautiful photos on instagram, remember that most of them are edited. They are brought to perfection. What I wanna say is that just because no one has pimples, cellulite and bags under their eyes on the photos they post doesn’t mean they don’t have it in real life. I wanna direct this message especially to the younger generation we have out there. Photo editing is one of my biggest passions in life, don’t get me wrong I love it. But at the same time I wanna say, what you see might not be reality and might not be the thing to strive for. Love yourself just the way you are, always. I got amazing people around me, I love the life I live and I love myself. Stay strong and stay true to yourself🖤 I just wanted to put some words out there and hopefully this gave some of you some new power! Love Ashu</p>
                </div>
                <div className="banner">
                    <img src={Image} alt="banner"/>
                </div>
            </div>
        </story>
    )
}

export default Story
