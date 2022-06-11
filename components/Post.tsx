import { useState } from "react";
import { UpdateSpoilrVotes } from "../lib/spoilrs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Paragraph from "./paragraph";
import Vote from "./Vote";

interface Spoilr {
  id: number;
  attributes: {
    votes: number;
    title: string;
    createdAt: string;
    content: string;
    tags: {
      data: [
        tag: {
          attributes: {
            name: string;
          }
        }
      ]
    }
    user: {
      data: {
        attributes: {
          username: string;
        }
      }
    }
  }
}

interface Props {
  spoilr: Spoilr;
}

export default function Post({ spoilr }: Props) {
  const [expand, setExpand] = useState(false);
  const [votes, setVotes] = useState(spoilr.attributes.votes);
  const username = spoilr.attributes.user.data.attributes.username;

  const handleToggle = () => {
    setExpand(!expand);
  };

  const handleVote = async (newSum: number) => {
    setVotes(newSum);
    const data = await UpdateSpoilrVotes(spoilr.id, newSum);
  };

  return (
    <div className={`card ${expand ? "expand" : ""}`}>
      <div className="card__content">
        <div>
          <div className="card__heading">
            <h4>{spoilr.attributes.title}</h4>
            {/* <FontAwesomeIcon icon={faXmark} className="delete-icon" /> */}
          </div>
          <div onClick={handleToggle}>
            <div className="card__info">
              <h5>{username}</h5>
              <h5>{spoilr.attributes.createdAt}</h5>
            </div>
            <div className={`card__text ${expand ? "expand-text" : ""}`}>
              <Paragraph text={spoilr.attributes.content} />
            </div>
          </div>
          <div className="tags__container">
            {spoilr.attributes.tags.data.map((tag, i) => (
              <h5 key={i} className="tag">
                {tag.attributes.name}
              </h5>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Vote votes={votes} handleVote={handleVote} />
      </div>
    </div>
  );
}
