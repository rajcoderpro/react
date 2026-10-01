import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  });

  return (
    <div
      ref={cursorRef}
      className="
        fixed
        top-0
        left-0
        w-5
        h-5
        rounded-full
        bg-cyan-300
        pointer-events-none
        z-9999
        -translate-x-1/2
        -translate-y-1/2
      "
      style={{
        boxShadow:
          "0 0 10px #67e8f9, 0 0 25px #22d3ee, 0 0 50px #06b6d4",
      }}
    />
  );
};

export default Cursor;
