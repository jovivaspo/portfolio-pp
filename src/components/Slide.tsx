import { useEffect, useRef } from "react";

const words = [
  "PHOTOGRAPHER",
  "MOTION GRAPHIC",
  "VIDEO EDITOR",
  "FILMMAKER",
  "MULTIMEDIA DESIGNER",
];

export const Slide = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const conRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function ConsoleText({ words }: { words: string[] }) {
      const target = targetRef.current;
      if (!target) return;

      let visible: boolean = true;
      let letterCount: number = 1;
      let x: number = 1;
      let waiting: boolean = false;

      const interval1 = window.setInterval(() => {
        if (letterCount === 0 && !waiting) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(() => {
            const usedWord = words.shift();
            words.push(usedWord as string);
            x = 1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && !waiting) {
          waiting = true;
          window.setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (!waiting) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);

      const interval2 = window.setInterval(() => {
        if (conRef.current) {
          if (visible) {
            conRef.current.className =
              "text-my-gray inline-block relative top-[-0.14em] left-[10px] opacity-0";
            visible = false;
          } else {
            conRef.current.className =
              "text-my-gray inline-block relative top-[-0.14em] left-[10px]";
            visible = true;
          }
        }
      }, 400);

      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }

    ConsoleText({ words });
  }, []);

  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center gap-10">
      <h2 className="text-3xl text-my-gray mb-2">THIS IS ME, PABLO: </h2>
      <div className="text-center">
        <span ref={targetRef} className="text-xl text-my-gray"></span>
        <div ref={conRef} className="console-underscore" id="console">
          &#95;
        </div>
      </div>
      <p className="text-md text-my-gray italic font-semibold mt-2">
        - based in Luxembourg -{" "}
      </p>
    </div>
  );
};
