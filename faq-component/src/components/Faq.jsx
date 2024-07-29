import React, { useEffect } from "react";
import useFaq from "../hooks/useFaq";

const Faq = ({ item, index }) => {
  const { isOpen, setIsOpen } = useFaq();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (index === 0) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <div className={"faq " + (isOpen ? "open" : "")} onClick={handleClick}>
        <div className="faq-question">
          {isOpen ? <span>&#9660;</span> : <spam>&#9650;</spam>} {item.question}
        </div>
        <div className="faq-answers">{isOpen && item.answer}</div>
      </div>
    </>
  );
};

export default Faq;
