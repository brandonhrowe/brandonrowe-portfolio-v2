import React, { useState, useEffect } from "react";

interface CarouselProps {
  children?: any;
}

const Carousel = ({ children }: CarouselProps) => {
  const [sortedChildren, setSortedChildren] = useState(children);

  const centerChildren = async (iterations = 1) => {
    await setSortedChildren((prevState: any) => {
      let result = Array.isArray(prevState) ? [...prevState] : [];
      for (let i = 0; i < iterations; i++) {
        const lastItem = result.pop();
        result = [lastItem, ...result];
      }
      return result;
    });
  };

  useEffect(() => {
    const midIdx = Math.floor(sortedChildren.length / 2);
    centerChildren(midIdx);
  }, []);

  return <div className="carousel">{sortedChildren}</div>;
};

export default Carousel;
