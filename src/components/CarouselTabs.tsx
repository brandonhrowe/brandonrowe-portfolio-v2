import React from "react";

interface CarouselTabsProps {
  children: Array<object>;
  activeIndex: number;
}

interface TabProps {
  className: string;
}

const isActive = (activeIdx: number, currIdx: number) =>
  activeIdx === currIdx ? "active" : "";

const Tab = ({ className }: TabProps) => (
  <svg
    className={`carousel-tab ${className}`}
    viewBox="0 0 12 12"
    width="12px"
    height="12px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="black" cx="6" cy="6" r="6" />
  </svg>
);

const CarouselTabs = ({ children, activeIndex }: CarouselTabsProps) => (
  <div className="carousel-tabs">
    {children.map((_, idx) => {
      const key = `carousel_tab_${idx}`;
      return <Tab key={key} className={isActive(activeIndex, idx)} />;
    })}
  </div>
);

export default CarouselTabs;
