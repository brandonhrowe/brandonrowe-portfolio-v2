import React, { useState } from "react";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

interface CardProps {
  title: string;
  description: string;
  links?: any;
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

interface PickerProps {
  cards: CardProps[];
  className?: string;
}

const Picker = ({ cards = [], className }: PickerProps) => {
  const [active, setActive] = useState<number>(0);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={`picker-component ${className}`}>
      <Card {...cards[active]} />
      <div className="thumbnails">
        {cards.map((card, idx) => (
          <div
            className={`thumbnail ${idx === active && 'active'}`}
            key={idx}
            onClick={() => setActive(idx)}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            style={{ backgroundImage: `url(${card.image})` }}
          ></div>
        ))}
      </div>
      <div className="thumbnail-navigation">
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          onClick={() =>
            setActive(active <= 0 ? cards.length - 1 : active - 1)
          }
          size="3x"
          className="nav-icon nav-left"
        />
        {hovered !== null && cards[hovered] && (
          <h6 className="thumbnail-title">{cards[hovered].title}</h6>
        )}
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          onClick={() =>
            setActive(active >= cards.length - 1 ? 0 : active + 1)
          }
          size="3x"
          className="nav-icon nav-right"
        />
      </div>
    </div>
  );
};

export default Picker;
