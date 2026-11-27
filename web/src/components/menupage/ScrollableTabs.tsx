
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollableTabsProps = {
  children: ReactNode;
  label: string;
  className?: string;
};

export default function ScrollableTabs({
  children,
  label,
  className = "",
}: ScrollableTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateArrows() {
    const element = scrollRef.current;
    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 2);
    setCanScrollRight(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 2
    );
  }

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const observer = new ResizeObserver(updateArrows);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  function scroll(amount: number) {
    scrollRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollRef}
        role="group"
        aria-label={label}
        onScroll={updateArrows}
        className="flex gap-2 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll categories left"
          onClick={() => scroll(-200)}
          className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full border border-aozora-dark/10 bg-aozora-cream/95 px-3 py-1 text-xl text-aozora-dark shadow-sm"
        >
          ‹
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll categories right"
          onClick={() => scroll(200)}
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full border border-aozora-dark/10 bg-aozora-cream/95 px-3 py-1 text-xl text-aozora-dark shadow-sm"
        >
          ›
        </button>
      )}
    </div>
  );
}
