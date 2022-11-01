import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import './reviews.css';

const Reviews = () => {
  
  const titleRef = useRef("");
  const nameRef = useRef("");
  const messageRef = useRef("");
  let [isCreateReviewMode, setCreateReviewMode] = useState(false);
  
  function reviewButtonHandler(e) {
    e.preventDefault();
    
    if (!isCreateReviewMode) {
      setCreateReviewMode(true);
      
    } else {
      const name = nameRef.current.value;
      const title = titleRef.current.value;
      const message = messageRef.current.value;
      if (name === null || name.length < 2) {
        alert("Invalid name, try again!");
        return;
      } else if (title === null || title.length < 2) {
        alert("Invalid title, try again!");
        return;
      } else if (message === null || message.length < 2) {
        alert("Invalid message, try again!");
        return;
      }
      alert("Review sent to be reviewed! Will be posted shortly");
      
      setCreateReviewMode(false);
    }
  }
  
  function reviewCloseHandler(e) {
    e.preventDefault();
    
    setCreateReviewMode(false);
  }
  
  return (
    <>
    <div className="page-other">
      <div className="default">
        <div className="container">
          <div className="container-title">Reviews</div>
          <div className="review">
            <div className="review-title">Definitely worth your time</div>
            <div className="review-desc">I've been working with Travel Destiny for almost a year now. They have helped me find the best deals everywhere
            I go!</div>
            <div className="review-author">- Anonymous</div>
          </div>
          <div className="review">
            <div className="review-title">10.01/10</div>
            <div className="review-desc">If I had a penny for every time I've looked up the Travel Destiny website for deals, I would be filthy rich. 
            Always be expecting new deals!!</div>
            <div className="review-author">- Greg C</div>
          </div>
          <div className="review">
            <div className="review-title">Travel Destiny is overall good!</div>
            <div className="review-desc">Even if you've had your share of airline phone calls who are stubborn or hard to work with, Magdo and his family
            are much better than those guys. Instead, MAgdo will actually take the time to work with you to find a good ticket for cheaper than other
            available prices even if it ends up taking up a good chunk of his time.</div>
            <div className="review-author">- Dave R</div>
          </div>
          <div className="review">
            <div className="review-title">100% would recommend</div>
            <div className="review-desc">Travel Destiny wasn't something I thought I could work with until I heard about the prices. They are incredibly 
            cheaper!</div>
            <div className="review-author">- Adam Cook</div>
          </div>
          <div className="review">
            <div className="review-title">Great!</div>
            <div className="review-desc">Magdo has given me good deals, Travel Destiny is a one and only website! I'm excited to buy from them again in the 
            future.</div>
            <div className="review-author">- Kara C</div>
          </div>
          
          {!isCreateReviewMode ?
          <div className="container-button">
            <Link className="nav-link" onClick={reviewButtonHandler}>Leave a Review!</Link>
          </div>
          :
          <div>
            <div className="input">
              <div className="input-label">Name:</div>
              <input className="input-field" id="inputName" ref={nameRef}/>
            </div>
            
            <div className="input">
              <div className="input-label">Review Title:</div>
              <input className="input-field" id="inputName" ref={titleRef}/>
            </div>
            
            <div className="input">
              <div className="input-label">Review Message:</div>
              <textarea className="input-box" id="inputMessage" ref={messageRef}/>
            </div>
            
            <div className="buttons">
              <div className="container-button">
                <a onClick={reviewButtonHandler}>Create Review</a>
              </div>
              <div className="container-button">
                <a onClick={reviewCloseHandler}>Close</a>
              </div>
            </div>
          </div>
          }
        </div>
        
      </div>
    </div>
    
    <div className="footer">
      <div className="footer-title"><a href="https://github.com/BryceCoop99/CS260">Bryce's Github</a></div>
    </div>
    
    </>
  
  );
};

export default Reviews;