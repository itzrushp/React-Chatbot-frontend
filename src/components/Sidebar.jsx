import React from 'react';

const Sidebar = ({ handleFAQClick }) => {
  const faqs = [
    "What is your return policy?",
    "How do I track my order?",
    "What are your shipping options?",
    "How can I contact customer service?",
    "What payment methods do you accept?",
  ];

  return (
    <div className="faq-container p-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="faq-box mb-2 p-3 rounded-md hover:shadow-lg transition duration-200 hover:bg-green-500 cursor-pointer"
          onClick={() => handleFAQClick(faq)}
        >
          {faq}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

  