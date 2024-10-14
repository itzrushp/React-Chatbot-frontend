import React, { useState, useEffect, useRef } from 'react';
import FAQs from '../components/FAQs'; // Assuming FAQs component is in a separate file

const ChatEnvironment = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Function to handle sending messages
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { sender: 'user', content: inputValue }]);

      // Simulate chatbot response
      setTimeout(() => {
        const response = getBotResponse(inputValue);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', content: response }
        ]);
      }, 500);

      setInputValue('');
    }
  };

  // Function to handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Sample bot response logic
  const getBotResponse = (userInput) => {
    switch (userInput.toLowerCase()) {
      case 'how long does the admission process take?':
        return 'It typically takes around 4-6 weeks for processing...';
      case 'how do i apply for scholarships?':
        return 'You can apply for scholarships through our online portal...';
      case 'what are the admission requirements?':
        return 'The admission requirements vary depending on the course...';
      case 'can i transfer credits from another institution?':
        return 'Yes, credit transfers are available depending on the program...';
      default:
        return 'Chatbot response here...';
    }
  };

  // Function to handle clicking on an FAQ
  const handleFAQClick = (faq) => {
    setMessages([...messages, { sender: 'user', content: faq.question }]);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', content: faq.answer }
      ]);
    }, 500);
  };

  return (
    <div className="h-screen flex">
      {/* FAQ Section */}
      <div className="w-1/4 bg-[#24252D] p-4 flex flex-col justify-between">
        <div className="text-white text-2xl mb-6">FAQs</div>
        <FAQs onFAQClick={handleFAQClick} />
        <button className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md">
          Log Out
        </button>
      </div>

      {/* Chat Window */}
      <div className="w-3/4 flex flex-col bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">CampusCompass</h2>

        {/* Chatbox messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              } w-full`}
            >
              <div
                className={`p-3 rounded-lg max-w-[70%] break-words ${
                  msg.sender === 'user'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {/* Always scroll to this div */}
          <div ref={chatEndRef} />
        </div>

        {/* Input and Send Button */}
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-1 p-4 text-lg border border-gray-300 rounded-lg focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white ml-3 px-4 py-2 rounded-full text-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatEnvironment;
