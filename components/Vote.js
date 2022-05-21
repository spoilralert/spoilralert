import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Vote({ spoilrs }) {
  const votes = spoilrs.votes;
  const [count, setCount] = useState(votes);
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);

  const handleUpVote = () => {
    const upVoteButton = document.querySelector(".upvote-btn");
    const downVoteButton = document.querySelector(".downvote-btn");

    if (!upVoted && !downVoted) {
      setCount((count += 1));
      setUpVoted(!upVoted);
      upVoteButton.classList.add("upvoted");
    } else if (!upVoted && downVoted) {
      setCount((count += 2));
      setUpVoted(!upVoted);
      setDownVoted(!downVoted);
      upVoteButton.classList.add("upvoted");
      downVoteButton.classList.remove("downvoted");
    } else {
      setCount((count -= 1));
      setUpVoted(!upVoted);
      upVoteButton.classList.remove("upvoted");
    }
  };

  const handleDownVote = () => {
    const upVoteButton = document.querySelector(".upvote-btn");
    const downVoteButton = document.querySelector(".downvote-btn");

    if (!upVoted && !downVoted) {
      setCount((count -= 1));
      setDownVoted(!downVoted);
      downVoteButton.classList.add("downvoted");
    } else if (!downVoted && upVoted) {
      setCount((count -= 2));
      setDownVoted(!downVoted);
      setUpVoted(!upVoted);
      upVoteButton.classList.remove("upvoted");
      downVoteButton.classList.add("downvoted");
    } else {
      setCount((count += 1));
      setDownVoted(!downVoted);
      downVoteButton.classList.remove("downvoted");
    }
  };

  return (
    <div className="vote__container">
      <button className="vote upvote-btn" onClick={handleUpVote}>
        <FontAwesomeIcon
          icon={faArrowUp}
          //   style={{ fontSize: 15 }}
          className="vote-icon"
        />
      </button>
      <button className="vote downvote-btn" onClick={handleDownVote}>
        <FontAwesomeIcon
          icon={faArrowDown}
          //   style={{ fontSize: 15 }}
          className="vote-icon"
        />
      </button>
      <h5>{count}</h5>
    </div>
  );
}
