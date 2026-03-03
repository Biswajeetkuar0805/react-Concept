import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { MdHeartBroken } from "react-icons/md";

const UseStateTask1 = () => {
  const [proposal, setProposal] = useState(<IoIosHeartEmpty />);
  const [rejectStyle, setRejectStyle] = useState({});

  const acceptProposal = () => {
    setProposal(<GoHeartFill fill="red" />);
  };

  const rejectproposal = () => {
    setProposal(<MdHeartBroken fill="red" />);
  };

  const reset = () => {
    setProposal(<IoIosHeartEmpty />);
  };

  const moveRejectButton = () => {
    const randomTop = Math.random() * 240;
    const randomLeft = Math.random() * 190;
    
    setRejectStyle({
      position: 'absolute',
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
      transition: 'all 0.3s ease'
    });
  };

  return (
    <div className="mainbox">
      <div className="box">
        <div className="proposal-wrapper">
          <div className="proposal">{proposal}</div>
        </div>
        <div className="btn">
          <button onClick={acceptProposal}>Accept 💕</button>
          <button 
            onClick={rejectproposal}
            onMouseEnter={moveRejectButton}
            style={rejectStyle}
          >
            Reject 😭
          </button>
          <button onClick={reset}>change your mind</button>
        </div>
      </div>
    </div>
  );
};

export default UseStateTask1;