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
                      <ul>
                        Q1: How do I make a new profile?
                      </ul>
                      <ul>
                        Q2: How do I login?
                      </ul>
                      <ul>
                        Q3: How do I View my Transactions/Totals?
                      </ul>
                      <ul>
                        Q4: How do I Add a Transaction?
                      </ul>
                      <ul>
                        Q5: Be Honest, Do You Sell My Information?
                      </ul>
                </h4>
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>
                  <ul>
                    A1: Click on "Home" then "Signup"!
                  </ul>
                  <ul>
                    A2: Click on "Home" or "Login"!
                  </ul>
                  <ul>
                    A3: Login, then Click on "My Account"!
                  </ul>
                  <ul>
                    A4: Login, Click on "My Account", then Fill in the Fields under "Add a Transaction"!
                  </ul>
                  <ul>
                    A5: Here at Money Time, We Value your Privacy. We Will Never Sell Your Information to Thrid Parties!
                  </ul>
                  </p>
              </div>
            </div>
          </button>
          <h5>For Any Other Questions, Please Call 1-800-555-2222</h5>
        </div>
      </div>
    </>
  );
}

export default CustomerService;