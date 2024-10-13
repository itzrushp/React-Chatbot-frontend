import React from 'react';

const faqList = [
  { question: 'What are the admission requirements?', answer: 'The admission requirements vary depending on the course...' },
  { question: 'How do I apply for scholarships?', answer: 'You can apply for scholarships through our online portal...' },
  { question: 'What documents do I need to submit?', answer: 'Documents include your academic transcripts, ID proof...' },
];

const FAQs = ({ onFAQClick }) => {
  return (
    <div className="space-y-4">
      {faqList.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-700 text-white p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-200 shadow-md"
          onClick={() => onFAQClick(faq)}
        >
          <p className="font-semibold">{faq.question}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
