'use client';

import React, { useState, Children, isValidElement, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable, SwipeEventData } from 'react-swipeable';

interface TabContainerProps {
  children: React.ReactNode;
  initialTab?: number;
  onTabChange?: (index: number) => void;
  activeIndex?: number;
  panelIds?: string[];
  tabIds?: string[];
  swipingEnabled?: boolean;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
};

export function TabContainer({
    children,
    initialTab = 0,
    onTabChange,
    activeIndex: controlledIndex,
    panelIds,
    tabIds,
    swipingEnabled = true
}: TabContainerProps) {
  const tabs = Children.toArray(children).filter(isValidElement);
  const [[internalIndex, direction], setInternalIndex] = useState([initialTab, 0]);

  const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  useEffect(() => {
    if (controlledIndex !== undefined && controlledIndex !== internalIndex) {
      const newDirection = controlledIndex > internalIndex ? 1 : -1;
      setInternalIndex([controlledIndex, newDirection]);
    }
  }, [controlledIndex, internalIndex]);

  const changeTab = (newDirection: number) => {
    const nextIndex = (currentIndex + newDirection + tabs.length) % tabs.length;
    if (controlledIndex !== undefined) {
        onTabChange?.(nextIndex);
    }
    else {
        const animationDirection = nextIndex > internalIndex ? 1 : (nextIndex < internalIndex ? -1 : 0);
        setInternalIndex([nextIndex, animationDirection]);
        onTabChange?.(nextIndex);
    }
  };

  const edgeThresholdPx = 50;

  const handlers = useSwipeable({
    onSwipedLeft: (eventData: SwipeEventData) => {
      if (!swipingEnabled) return;
      const containerWidth = (eventData.event.currentTarget as HTMLElement)?.offsetWidth;
      if (!containerWidth) return;
      if (eventData.initial[0] > containerWidth - edgeThresholdPx) {
        changeTab(1);
      }
    },
    onSwipedRight: (eventData: SwipeEventData) => {
      if (!swipingEnabled) return;
      const containerWidth = (eventData.event.currentTarget as HTMLElement)?.offsetWidth;
      if (!containerWidth) return;
      if (eventData.initial[0] < edgeThresholdPx) {
        changeTab(-1);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  if (!tabs.length) {
    return null;
  }

  const activeTabContent = tabs[currentIndex];

  return (
    <div {...handlers} className="relative overflow-hidden w-full h-full flex-grow">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          role="tabpanel"
          id={panelIds?.[currentIndex]}
          aria-labelledby={tabIds?.[currentIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          {activeTabContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 