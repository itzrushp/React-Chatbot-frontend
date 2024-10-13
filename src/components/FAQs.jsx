// src/components/FAQs.jsx
import React from 'react';

const FAQs = ({ addMessage }) => {
  const faqs = [
    "How do I apply for admission?",
    "What are the admission requirements?",
    "When is the application deadline?",
    "How can I check my application status?",
    "What scholarships are available?",
  ];

  return (
    <div className="w-64 bg-white p-4 border-l">
      <h2 className="text-lg font-semibold mb-4">Common FAQs</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => addMessage(faq, true)}
              className="text-left text-sm text-blue-600 hover:underline"
            >
              {faq}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQs;