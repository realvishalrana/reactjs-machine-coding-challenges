import React from "react";
import Faq from "./Faq";

const FAQS = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

const Faqs = () => {
  return (
    <div>
      <h1 className="header">Frequently Asked Questions</h1>
      <div className="faqs">
        {FAQS.map((item, index) => (
          <Faq item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
