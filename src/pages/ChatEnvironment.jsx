import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import './ChatEnvironment.css'; // Import the CSS file for styles

const ChatEnvironment = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I assist you today?' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleFAQClick = (faq) => {
    const botReply = `You clicked: "${faq}"! Here's the chatbot's response to this FAQ.`;
    
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: faq },
      { sender: 'bot', text: botReply },
    ]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: inputValue },
      ]);
      setInputValue('');
    }
  };

  return (
    <div className="h-screen w-screen bg-[#24252D] flex items-center">
      <div className="sidebar">
        <Sidebar handleFAQClick={handleFAQClick} />
      </div>
      <div className="chat-window bg-[#f7f7f7] flex flex-col rounded-[2.5%] w-3/4">
        <ChatWindow messages={messages} />

        <div className="input-area flex items-center p-4 border-t border-gray-300">
          <button className="text-gray-500 hover:text-gray-700 mr-2">
            <i className="fas fa-microphone"></i>
          </button>
          <input
            type="text"
            placeholder="Start typing"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-2 border rounded-md"
          />
          <button
            onClick={handleSendMessage}
            className="bg-orange-500 text-white p-2 rounded-md ml-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatEnvironment;
