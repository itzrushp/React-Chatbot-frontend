import React from 'react';

// List of FAQs
const faqList = [
  { question: 'What are the admission requirements?', answer: 'The admission requirements vary depending on the course...' },
  { question: 'How do I apply for scholarships?', answer: 'You can apply for scholarships through our online portal...' },
  { question: 'What documents do I need to submit?', answer: 'Documents include your academic transcripts, ID proof...' },
  { question: 'How long does the admission process take?', answer: 'It typically takes around 4-6 weeks for processing...' },
  { question: 'Can I transfer credits from another institution?', answer: 'Yes, credit transfers are available depending on the program...' },
  // Add more FAQs as necessary
];

const FAQs = ({ onFAQClick }) => {
  return (
    <div className="space-y-4 overflow-y-auto h-full">
      {faqList.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-[#2C2F34] hover:text-[#B7C49E] transition duration-200 ease-in-out flex items-center justify-between"
          onClick={() => onFAQClick(faq)}
        >
          {faq.question}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
