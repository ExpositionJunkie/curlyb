import React from "react" 

const Paragraph = ({ arr }) => {
  if (arr) {
    arr.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
  } else {
    return <></>;
  }
};

export default Paragraph;