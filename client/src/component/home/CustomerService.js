import React, { useState, useRef, useEffect } from 'react';
import "./CustomerService.css";
// import { FiPlus } from "react-icons/fi";


function CustomerService() {
    const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="App">
        <div>
            <h3>Frequently Asked Questions</h3>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                      How do I make a new profile?
                </h4>
                {/* <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                /> */}
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>Click on "Home" then "Signup"!</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomerService;