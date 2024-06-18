import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults, searchBarResults } from "../utils/searchSlice";

const Head = () => {
  // const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //make an API call after every keypress but if the difference between 2 API calls is <200ms DECLINE THE API CALL
    const timer = setTimeout(() => {
      //caching the search requests
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleSuggestionClick = (suggest) => {
     setSearchQuery(suggest);
     dispatch(
       searchBarResults(suggest)
     );
     alert("clicked");
  };

  const getSearchSuggestions = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));

  };
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          className="h-8 mx-2 cursor-pointer"
          onClick={toggleMenuHandler}
          src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png"
          alt="ham-menu"
        />
        <a href="/">
          <img
            className="h-8"
            alt="logo"
            src="data:image/png;base64,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"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="border border-gray-400 w-1/2 p-2 rounded-l-full px-5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="py-2 px-5 border border-gray-400 rounded-r-full bg-gray-300">
            🔍
          </button>
        </div>
        {true && (
          <div className="fixed bg-white py-2 px-2 w-[30.5rem] shadow-xl rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggest, index) => (
                <li
                  key={index}
                  className="py-2 px-2 shadow-sm  hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggest)}
                >
                  🔍 {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="data:image/png;base64,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"
          alt="userIcon"
        />
      </div>
    </div>
  );
};

export default Head;
