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

  // Handle FAQ click
  const handleFAQClick = (faq) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: faq.question, user: "You" },
      { text: faq.answer, user: "Chatbot" },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-black flex">
      {/* FAQ Column */}
      <div className="w-1/3 bg-[#24252D] text-white p-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <FAQs onFAQClick={handleFAQClick} />
        <button className="bg-red-600 p-2 rounded-md mt-auto mb-0 w-full">Log Out</button>
      </div>

      {/* Chatbot Interface */}
      <div className="w-2/3 bg-transparent flex flex-col justify-between p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">CampusCompass</h2>
        <div className="flex-grow overflow-y-auto p-4 rounded-lg bg-white">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.user === "You" ? "text-right" : "text-left"
              }`}
            >
              {msg.user === "You" ? (
                <div className="inline-block bg-[#F1F1F1] text-black p-3 rounded-lg max-w-xs">
                  <span>{msg.text}</span>
                </div>
              ) : (
                <div className="inline-block text-gray-900 p-3 max-w-xs">
                  <span>{msg.text}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="bg-gray-200 text-black p-3 rounded-lg flex-grow focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#FF5722] text-white px-4 py-3 ml-4 rounded-full flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h13M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatEnvironment;
