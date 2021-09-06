import React from "react";

const AboutWebsite =  (props) => {
    return (
        <div style={{height:'400px', width:'600px', textAlign:'center'}}>
            <img src={props.websiteData.website.image} alt='Loading' style={{height:'100%', width:'100%'}}/>
            <p >{props.websiteData.website.title}</p>
            <p contentEditable='true'>{props.websiteData.website.description}</p>
            <p>{props.websiteData.website.url}</p>
            <button>Save Changes</button>
        </div>
    )
}


export default AboutWebsite;