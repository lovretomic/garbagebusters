import { Children, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import c from "./CardCarousel.module.scss";

type CardCarouselProps = {
  children: ReactNode;
};

const CardCarousel: React.FC<CardCarouselProps> = ({ children }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Children.toArray(children);
  const count = items.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track || count < 2) return;

    const onScroll = () => {
      const step = (track.scrollWidth - track.clientWidth) / (count - 1);
      if (step <= 0) return;
      setActiveIndex(Math.round(track.scrollLeft / step));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [count]);

  return (
    <div className={c.carousel}>
      <div className={c.track} ref={trackRef}>
        {items.map((item, i) => (
          <div className={c.slide} key={i}>
            {item}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className={c.dots} aria-hidden="true">
          {items.map((_, i) => (
            <div
              key={i}
              className={`${c.dot} ${i === activeIndex ? c.active : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardCarousel;
