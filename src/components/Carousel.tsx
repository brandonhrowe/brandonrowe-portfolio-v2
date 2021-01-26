/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CarouselProps {
  children?: any;
  startFrom?: number;
  className?: string;
}

const animationTimeDuration = 350;
const autoAdvanceInterval = 5000;
const scrollBuffer = 1000;

const Carousel = ({
  children = [],
  startFrom = 0,
  className = "",
}: CarouselProps) => {
  const [cards, setCards] = useState(children);
  const [currIdx, setCurrIdx] = useState(startFrom);
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [scrollingTo, setScrollingTo] = useState(null);

  const midIdx = Math.floor(cards.length / 2);

  const viewportRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const centerCards = async () => {
      await sortCardsForward(midIdx);
    };

    handleFirstVisibleSlide();
    centerCards().then(() => {
      setInterval(() => {
        triggerRightNav();
      }, autoAdvanceInterval);
      setScrollAnimation(true);
    });
  }, []);

  useEffect(() => {
    handleFirstVisibleSlide();
  }, [startFrom]);

  useEffect(() => {
    if (scrollingTo === "left") {
      handleLeftNav();
    } else if (scrollingTo === "right") {
      handleRightNav();
    }
  }, [scrollingTo]);

  const triggerLeftNav = () => {
    setScrollingTo((prevState: any) =>
      ["right", "left"].includes(prevState) ? prevState : "left"
    );
  };

  const triggerRightNav = () => {
    setScrollingTo((prevState: any) =>
      ["right", "left"].includes(prevState) ? prevState : "right"
    );
  };

  const sortCardsForward = async (iterations = 1) => {
    for (let i = 0; i < iterations; i++) {
      await setCards((prevCards = []) => {
        let result: any = [];
        if (prevCards.length) {
          const lastCard = prevCards[prevCards.length - 1];
          result = []
            .concat(lastCard)
            .concat(prevCards.slice(0, prevCards.length - 1));
        }
        return result;
      });
    }
  };

  const sortCardsBack = async (iterations = 1) => {
    for (let i = 0; i < iterations; i++) {
      await setCards((prevCards = []) => {
        let result: any = [];
        if (prevCards.length) {
          const firstCard = prevCards[0];
          result = [].concat(prevCards.slice(1)).concat(firstCard);
        }
        return result;
      });
    }
  };

  const scrollIntoViewIfNeeded = (slide: any) => {
    const viewport = slide.parentNode;
    const slideLeft = slide.offsetLeft;
    viewport.scrollLeft = Math.max(slideLeft, 0);
  };

  const handleFirstVisibleSlide = () => {
    const startIndex = Math.min(
      Math.max(startFrom, midIdx, 0),
      children.length
    );
    const viewport: any = viewportRef.current;
    if (viewport) {
      const slides = viewport.querySelectorAll(".slide");
      const slide = slides && slides.length && slides[startIndex];
      if (slide) {
        scrollIntoViewIfNeeded(slide);
      }
    }
  };

  const findFirstVisibleElement = (viewport: any, lb?: any) => {
    const nodes = viewport.childNodes;
    return [].find.call(
      nodes,
      (node: any) => node.offsetLeft >= (lb || viewport.scrollLeft)
    );
  };

  const findFirstInvisibleElement = (viewport: any, container: any) => {
    const nodes = viewport.childNodes;
    return [].find.call(
      nodes,
      (node: any) =>
        node.offsetLeft + node.clientWidth >
        container.clientWidth + viewport.scrollLeft
    );
  };

  const handleLeftNav = async () => {
    if (viewportRef) {
      const viewport: any = viewportRef.current,
        container: any = containerRef.current;
      let firstVisible: any = findFirstVisibleElement(viewport) || {};
      firstVisible = firstVisible.previousElementSibling || null;
      if (firstVisible) {
        const previousElement: any = findFirstVisibleElement(
          viewport,
          firstVisible.offsetLeft +
            firstVisible.offsetWidth -
            container.clientWidth
        );
        let newPos = 0;
        if (previousElement) {
          const paddingLeft = viewport.children[0].offsetLeft;
          newPos = previousElement.offsetLeft - paddingLeft;
        }
        const tempNewPos = newPos + viewport.clientWidth * 2;
        await sortCardsForward();
        scrollTo({
          element: viewport,
          to: tempNewPos,
          duration: 1,
          iconChange: 0,
          hideAnimation: true,
        });
        newPos += viewport.clientWidth;
        setTimeout(() => {
          scrollTo({
            element: viewport,
            to: newPos,
            duration: animationTimeDuration,
            iconChange: -1,
          });
        }, 1);
      }
    }
    setTimeout(() => {
      setScrollingTo(null);
    }, scrollBuffer);
  };

  const handleRightNav = async () => {
    if (viewportRef) {
      const viewport: any = viewportRef.current,
        container: any = containerRef.current;
      const firstInvisibleElement: any = findFirstInvisibleElement(
        viewport,
        container
      );
      const [slide] = viewport.children;
      let newPos = 0;

      if (firstInvisibleElement) {
        const paddingLeft = slide.offsetLeft;
        newPos =
          Math.min(
            firstInvisibleElement.offsetLeft - paddingLeft,
            viewport.scrollLeft - viewport.clientWidth
          ) +
          slide.clientWidth * midIdx;
      }

      const tempNewPos = Math.max(newPos - slide.clientWidth * 2, 0);

      await sortCardsBack();
      scrollTo({
        element: viewport,
        to: tempNewPos,
        duration: 1,
        iconChange: 0,
        hideAnimation: true,
      });
      newPos -= slide.clientWidth;

      setTimeout(() => {
        scrollTo({
          element: viewport,
          to: newPos,
          duration: animationTimeDuration,
          iconChange: 1,
        });
      }, 1);
    }
    setTimeout(() => {
      setScrollingTo(null);
    }, scrollBuffer);
  };

  const scrollTo = (params: any) => {
    const {
      element,
      to,
      duration,
      scrollDirection = "scrollLeft",
      iconChange,
      hideAnimation,
    } = params;
    setScrollAnimation(!hideAnimation);
    element[scrollDirection] = to;
    const start = element[scrollDirection],
      change = to - start,
      increment = 1000 / 60;

    setCurrIdx((prevIdx) =>
      Math.min(Math.max(prevIdx + iconChange, 0), children.length - 1)
    );

    const animateScroll = (elapsedTime: number) => {
      elapsedTime += increment;
      const position = easeInOut(elapsedTime, start, change, duration);
      element[scrollDirection] = position;
      if (elapsedTime < duration) {
        window.requestAnimationFrame(animateScroll.bind(null, elapsedTime));
      }
    };

    window.requestAnimationFrame(animateScroll.bind(null, 0));
  };

  const easeInOut = (
    currentTime: number,
    start: number,
    change: number,
    duration: number
  ) => {
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return (change / 2) * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
  };

  return (
    <div className={`carousel-component ${className}`} ref={containerRef}>
      <div onClick={triggerLeftNav} className="carousel-nav nav-left">
        <FontAwesomeIcon icon={faArrowCircleLeft} size="3x" />
      </div>
      <div className="viewport-wrapper">
        <div
          className={`carousel-viewport ${
            !scrollAnimation ? "no-scroll-animation" : ""
          }`}
          key="viewport"
          draggable={false}
          onDragStart={(e) => {
            e.preventDefault();
            return e.cancelable;
          }}
          ref={viewportRef}
        >
          {cards.map((item: any, idx: number) => (
            <div
              key={`slide_${item.key || idx}`}
              className="slide"
              draggable={false}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div onClick={triggerRightNav} className="carousel-nav nav-right">
        <FontAwesomeIcon icon={faArrowCircleRight} size="3x" />
      </div>
    </div>
  );
};

export default Carousel;
