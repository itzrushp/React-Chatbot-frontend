import React, { useState } from 'react';
import FAQs from '../components/FAQs';

const ChatEnvironment = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, user: "You" },
      ]);
      setInput(""); // Clear input

      // Simulate chatbot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Chatbot response here...", user: "Chatbot" },
        ]);
      }, 1000);
    }
  };

  const handleFAQClick = (faq) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: faq.question, user: "You" },
      { text: faq.answer, user: "Chatbot" },
    ]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-light flex">
      {/* Sidebar for FAQ */}
      <div className="w-1/4 bg-gray-800 p-4 border-r border-gray-700 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-white">FAQs</h2>
        <FAQs onFAQClick={handleFAQClick} />
      </div>

      {/* Main Chat Area */}
      <div className="w-3/4 flex flex-col justify-between">
        {/* Chat Messages */}
        <div className="flex-grow overflow-y-auto p-4 bg-gray-900">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 flex ${msg.user === "You" ? "justify-end" : "justify-start"}`}>
              <div className={`p-3 rounded-lg max-w-xs ${msg.user === "You" ? "bg-blue-600 text-white" : "bg-gray-700 text-white"}`}>
                <span className="font-semibold">{msg.user}: </span>
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-2 border-t border-gray-700 bg-gray-800 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-grow p-3 mr-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 border border-gray-600"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatEnvironment;
