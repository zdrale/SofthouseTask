import React from "react";

const AboutWebsite =  (props) => {

    const description = document.getElementById("editable");

    console.log(description);

    return (
        <div style={{height:'400px', width:'600px', textAlign:'center'}}>
            <img src={props.websiteData.website.image} alt='Loading' style={{height:'100%', width:'100%'}}/>
            <p>{props.websiteData.website.title}</p>
            <p id='editable' contentEditable='true'>{props.websiteData.website.description}</p>
            <p>{props.websiteData.website.url}</p>
        </div>
    )
}


export default AboutWebsite;