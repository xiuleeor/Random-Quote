import React from 'react';
import { body } from "../Data/quote-body.js";
import { useState } from "react";
import { FaTwitter, FaTumblr } from "react-icons/fa";
import {colors} from "../Data/colors";
import  "../Components/Styles/quote.css"

function getRandomNumber() {
  return Math.floor(Math.random() * body.length);
}
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
function Quote(){
   
  const [newQuote, setNewQuote] = useState(null);
  let bodyText = newQuote || body[getRandomNumber()];
  let color = colors[getRandomColor()];
    
  return (
    <div className="container-fluid page" style = {{backgroundColor: color}} id="quote-box">
      <style>
        {`
          body {
            background-color: ${color};
          }
        `}
      </style>
      <div className="card">
        <div className="card-body" style = {{color: color}} >
          <blockquote className="blockquote mb-0">
              <p id="text">{newQuote?.text || bodyText.text}</p>
              <footer className="blockquote-footer foot" style = {{color: color}} id="author">{bodyText.author}</footer>
          </blockquote>
        </div>
        <div className="container d-flex mb-3">
        <a id="tweet-quote" href="https://www.twitter.com/intent/tweet" target="_blank" rel="noreferrer"><FaTwitter className="ico" style = {{backgroundColor: color}}/></a>
        <a href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DFarrah%2BGray%26content%3DBuild%2Byour%2Bown%2Bdreams%252C%2Bor%2Bsomeone%2Belse%2Bwill%2Bhire%2Byou%2Bto%2Bbuild%2Btheirs.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"target="_blank" rel="noreferrer"><FaTumblr className="ico" style = {{backgroundColor: color}}/></a>    
            <button id="new-quote" className='bton ms-auto p-2' onClick={() => setNewQuote(body[getRandomNumber()])} style = {{backgroundColor: color}}>new quote</button>
        </div>
      </div>
    </div>
    
  )
}

export default Quote;