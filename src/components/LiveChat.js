import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  

  useEffect(() => {
    const time = setInterval(() => {
      //API polling
      console.log("API polling");
      
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black border-b-0 rounded-lg rounded-b-none h-[550px] w-full bg-slate-100  overflow-y-scroll  scroll-auto flex flex-col-reverse">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="w-full border border-black border-t-0 bg-slate-200 p-2 ml-2 rounded-lg rounded-t-none"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Yash Bahuguna",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[80%] px-2 text-xl outline-none bg-transparent "
          placeholder="Chat..."
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 ml-2 bg-green-300 w-[18%] h-10 font-bold text-xl rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
