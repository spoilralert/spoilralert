import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Vote({ votes, handleVote}) {
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);

  const handleUpVote = async () => {
    const upVoteButton = document.querySelector(".upvote-btn");
    const downVoteButton = document.querySelector(".downvote-btn");

    if (!upVoted && !downVoted) {
      await handleVote((votes += 1));
      setUpVoted(!upVoted);
      upVoteButton.classList.add("upvoted");
    } else if (!upVoted && downVoted) {
      await handleVote((votes += 2));
      setUpVoted(!upVoted);
      setDownVoted(!downVoted);
      upVoteButton.classList.add("upvoted");
      downVoteButton.classList.remove("downvoted");
    } else {
      await handleVote((votes -= 1));
      setUpVoted(!upVoted);
      upVoteButton.classList.remove("upvoted");
    }
  };

  const handleDownVote = async () => {
    const upVoteButton = document.querySelector(".upvote-btn");
    const downVoteButton = document.querySelector(".downvote-btn");

    if (!upVoted && !downVoted) {
      await handleVote((votes -= 1));
      setDownVoted(!downVoted);
      downVoteButton.classList.add("downvoted");
    } else if (!downVoted && upVoted) {
      await handleVote((votes -= 2));
      setDownVoted(!downVoted);
      setUpVoted(!upVoted);
      upVoteButton.classList.remove("upvoted");
      downVoteButton.classList.add("downvoted");
    } else {
      await handleVote((votes += 1));
      setDownVoted(!downVoted);
      downVoteButton.classList.remove("downvoted");
    }
  };

  return (
    <div className="vote__container">
      <button className="vote upvote-btn" onClick={handleUpVote}>
        <FontAwesomeIcon icon={faArrowUp} className="vote-icon" />
      </button>
      <button className="vote downvote-btn" onClick={handleDownVote}>
        <FontAwesomeIcon icon={faArrowDown} className="vote-icon" />
      </button>
      <h5>{votes}</h5>
    </div>
  );
}
