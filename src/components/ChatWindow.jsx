// src/components/ChatWindow.jsx
import React from 'react';

const ChatWindow = ({ messages, chatEndRef }) => {
  return (
    <div className="flex-1 bg-[#24252d] text-white p-4 overflow-y-auto">
      {messages.map((message, index) => (
        <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
          <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-[#ef6a36]' : 'bg-[#2e2f38]'}`}>
            {message.text}
          </span>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow;

  