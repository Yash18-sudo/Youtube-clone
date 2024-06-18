import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-sm rounded-lg p-2 bg-gray-300 my-2 items-center">
      <img
        className="w-20"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        alt="user"
      />

      <span className="font-bold pr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
