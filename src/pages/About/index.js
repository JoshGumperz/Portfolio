import React from 'react';
import "./index.css"

function About() {
    // using a function to automatically calculate my age so I don't have to keep coming back to update it
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }

    return (  
        <section className="about-container">
            <div className='about-bodyContainer'>
                <div className="about-paragraph">
                    <h2 className="about-h2">About Me</h2>
                    <img src={`${process.env.PUBLIC_URL}/assets/Images/Linked-In-Profile-Photo.jpg`} className="about-img" alt="Headshot"/>
                    <p className="about-text">
                    Hi my name is Josh Gumperz, I'm {getAge('03/10/2001')} years old, and I am an aspiring software developer. I grew up around computers and tech, and as a result I've always had a passion for computers and the tech industry. I even built my own computer when I was 15. When I graduated highschool, I knew I wanted to work in the tech industry, but I didn't know exactly which field I wanted to work in. So I took an IT training class which taught me how to troubleshoot and repair computers and work with computer hardware. After that, I did an internship at a local computer repair shop in Alameda. I learned a lot during my time as an IT student but ultimately decided it wasn't for me and that I would rather do something more software oriented instead. During the 2020 pandemic I did some self training using resources such as CodeAcademy to teach myself some Python, before eventually committing to a full-stack web development coding bootcamp at UC Berkeley Extension in summer of 2021. At the bootcamp, I learned how to build full-stack web applications from scratch, back-end to front-end. I'm now working towards my long term goal of becoming a full-time software developer!
                    </p>
                    <p className="about-text">
                    Outside of coding I have several interests and hobbies such as: playing games with friends, as well as watching - and sometimes playing sports. My favorite sports to watch are Basketball and Soccer, my favorite Basketball team is the Warriors and my favorite Soccer team is Manchester City. One interesting fact about me is that during the 2020 pandemic, I made some big lifestyle changes and ended up losing 140 pounds in a year. I'm still not quite at my weight goal, but I know I will be soon.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;