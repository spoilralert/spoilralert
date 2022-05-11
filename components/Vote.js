import { useState } from "react";

export default function Vote() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleVote = () => {
    const button = document.querySelector(".vote");

    if (!liked) {
      setCount((count += 1));
      setLiked(!liked);
      button.classList.add("liked");
    } else {
      setCount((count -= 1));
      setLiked(!liked);
      button.classList.remove("liked");
    }
  };

  return (
    <div>
      <button className="vote" onClick={handleVote}>
        {/* {count} */}
        Upvote
      </button>
    </div>
  );
}
