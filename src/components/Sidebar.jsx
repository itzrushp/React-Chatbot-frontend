// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#18191d] text-[#8e8e93] p-4">
      <div className="flex items-center mb-8">
        <img src="/path-to-your-logo.png" alt="Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-xl font-bold text-white">MindMerge</h1>
      </div>
      <nav>
        <ul>
          <li className="mb-2 bg-[#24252d] text-white rounded-lg p-2">AI Chat Helper</li>
          <li className="mb-2 p-2 flex justify-between items-center">
            Templates <span className="bg-[#ef6a36] text-xs text-white px-1 rounded">PRO</span>
          </li>
          <li className="mb-2 p-2 flex justify-between items-center">
            My Projects <span className="bg-[#ef6a36] text-xs text-white px-1 rounded">PRO</span>
          </li>
          <li className="mb-2 p-2 flex justify-between items-center">
            Statistics <span className="bg-[#ef6a36] text-xs text-white px-1 rounded">PRO</span>
          </li>
          <li className="mb-2 p-2">Settings</li>
          <li className="mb-2 p-2">Updates & FAQ</li>
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="bg-gradient-to-r from-[#ef6a36] to-[#f39c5d] rounded-lg p-4 text-white">
          <h3 className="font-bold mb-2">Pro Plan</h3>
          <p className="text-sm mb-2">Strengthen artificial intelligence: get plan!</p>
          <p className="font-bold mb-2">$10 / mo</p>
          <button className="bg-white text-[#ef6a36] px-4 py-1 rounded-full text-sm">Get</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;