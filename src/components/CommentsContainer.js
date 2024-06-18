import React from "react";

const commentsData = [
  {
    name: "Yash Bahuguna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Yash Bahuguna",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Yash Bahuguna",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Yash Bahuguna",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Yash Bahuguna",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Yash Bahuguna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Yash Bahuguna",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Yash Bahuguna",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Yash Bahuguna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Yash Bahuguna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Yash Bahuguna",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm rounded-lg p-2 bg-gray-100 my-2">
      <img
        className=" w-20"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  //don't use index as key
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
