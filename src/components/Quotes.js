

// In the future, we'll be using Cloud Firestore for the json, limited by three so we can design for just that space

import { useState } from "react";

import quoteImg from '../graphics/quote_scaled.png';

import '../css/Quotes.css';

import imgUrl from '../graphics/avatar1.jpg';

// let testUrl =

let tempQuoteObject = [
    {
        photoUrl: '../graphics/avatar1.jpg',
        name: 'Matthew B',
        title: 'Local Guide',
        review: 'I have been going to these guys for a while. I drive from UCF and it is absolutely worth it. Jake and Chan are amazing. Best cut in town. Great conversation to go with it. Its not your average barber shop. Great vibes! I cant recommend them enough. Even my 7 year old loves coming with me and getting his hair cut.',
        currentlySelected: true
    },
    {
        photoUrl: '../graphics/avatar1.jpg',
        name: 'Jimmy W',
        title: 'CFO',
        review: 'Jake is an awesome hair stylist! Been going to him for my hair for over two years now and it’s always been top tier. He’s a really chill dude and makes getting a haircut a really enjoyable time...',
        currentlySelected: false
    },
    {
        photoUrl: '../graphics/avatar1.jpg',
        name: 'Michael B',
        title: 'Hooligan',
        review: `I was looking for a place that wouldn't just give me a buzz cut, and Jake hooked me up with a really great cut. Jake and Chandler are friendly and welcoming and run a pristine looking barber shop that does it all.  You will definitely not be disappointed!`,
        currentlySelected: false
    },
]




export default function Quotes(){
 
    const [currentReview, updateCurrentReview] = useState(tempQuoteObject[0].review);


    let profileMap = tempQuoteObject.map((review, i) => {
        return(
            <div 
                // style={{backgroundColor: (review.currentlySelected ? 'red' : 'initial')}}
                className="quote-element" 
                key={`${i}_${review.name}_${review.title}`}
                onClick={() => {
                    updateCurrentReview(review.review)
                }}
            >

                <div>
                    {/* <img className="quote-image" src={imgUrl} /> */}
                </div>
                <div>
                    <h3>{review.name}</h3>
                    {/* <h5>{review.title}</h5> */}
                </div>
            </div>
        )
    });
 


    return(

        <div className="quotes-section">

            <img src={quoteImg} className="quote-png" />
            <quote>
            <h2 style={{maxWidth: '80%', display: 'block', margin: 'auto', paddingTop: '1em'}}>"{currentReview}"</h2>

            </quote>
            <div className="quotes-wrapper">
                {profileMap}
            </div>
        </div>

    );
}