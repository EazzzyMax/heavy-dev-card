import React, { useState, useEffect } from "react";

const CursorDistanceTracker = () => {
  const [distance, setDistance] = useState(0);
  const [prevCursorPosition, setPrevCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const currentCursorPosition = { x: clientX, y: clientY };

      if (prevCursorPosition.x !== 0 || prevCursorPosition.y !== 0) {
        const deltaX = currentCursorPosition.x - prevCursorPosition.x;
        const deltaY = currentCursorPosition.y - prevCursorPosition.y;
        const movedDistance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        setDistance((prevDistance) => prevDistance + movedDistance);
      }

      setPrevCursorPosition(currentCursorPosition);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prevCursorPosition]);

  return (
    <div>
      <p>Total cursor distance: {distance.toFixed(0)} pixels</p>
    </div>
  );
};

export default CursorDistanceTracker;
