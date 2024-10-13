

// const ChatWindow = ({ messages, addMessage }) => {
//   const [input, setInput] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       addMessage(input, true);
//       setInput('');
//       // Here you would typically call your chatbot API
//       // For now, let's just echo the message
//       setTimeout(() => {
//         addMessage(`You asked: ${input}`, false);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="flex-1 flex flex-col bg-white">
//       <div className="flex-1 p-4 overflow-y-auto">
//         {messages.map((message, index) => (
//           <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
//             <span className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
//               {message.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className="p-4 border-t">
//         <div className="flex">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="flex-1 border rounded-l-lg p-2"
//             placeholder="Type your message..."
//           />
//           <button type="submit" className="bg-[#ef6a36] text-white px-4 py-2 rounded-r-lg">
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ChatWindow;
import React from 'react';
import './ChatWindow.css'; // Import the CSS file for styles

const ChatWindow = ({ messages }) => {
  return (
    <div className="bg-white flex-1 rounded-md p-4 overflow-y-auto chat-window">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat-message my-2 p-2 rounded-lg animate__animated ${
            message.sender === 'user'
              ? 'bg-blue-200 self-end animate__fadeInRight'
              : 'bg-gray-200 self-start animate__fadeInLeft'
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;

  