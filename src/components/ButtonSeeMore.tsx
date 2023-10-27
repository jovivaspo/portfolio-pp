import { useRef } from "react";

export const ButtonSeeMore = () => {
  const refButton = useRef<HTMLButtonElement | null>(null);

  const handleEnter = () => {
    if (!refButton.current) return;
    refButton.current.innerHTML = `<span class='text-white rounded-[9999px] animate-fade-down'>In Flickr!</span>`;
  };

  const handleLeave = () => {
    if (!refButton.current) return;
    refButton.current.innerHTML = `<span class='text-black rounded-[9999px]'>See more here...</span>`;
  };

  return (
    <button
      ref={refButton}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="px-4 py-2 bg-white rounded-[9999px] shadow-lg font-semibold w-[168px] hover:bg-black"
    >
      <span>See more here...</span>
    </button>
  );
};
