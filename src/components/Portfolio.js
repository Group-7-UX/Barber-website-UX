
import React from 'react';


import '../css/Portfolio.css';

// Here's the link to the instagram embed we're using
// https://apps.elfsight.com/panel/applications/instashow/edit/84954ac3-3a1b-42f3-9ebf-df95150c9c44/

// The free version is limited to 200 loads a month, 
// probably not enough to actually work

// We'll think of a different solution if we have to, 
// but for now let's focus on the other parts of the site


// This is another free version that might be worth exploring
// https://curator.io/blog/how-to-embed-your-instagram-feed-on-your-website


// If none of these work, maybe a custom setup for us using puppeteerJS and Cloud Functions?

export default class Portfolio extends React.Component{

    // to limit the amount of loads we spend on testing, we're commenting this out
    // Make sure to uncomment this before deploying

    componentDidMount(){
        const script = document.createElement("script");

        script.src = "https://apps.elfsight.com/p/platform.js";
        script.async = true;
    
        document.body.appendChild(script);
    }


    render(){

        return(
            <div>

            <h1>Portfolio</h1>

            <div className="instagram-wrapper">
                <div class="elfsight-app-84954ac3-3a1b-42f3-9ebf-df95150c9c44"></div>
            </div>

        </div>
    );
}
}