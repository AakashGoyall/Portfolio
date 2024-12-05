import { useEffect, useState } from "react";

const TypeAnimation = ({data}) => {
  const words = [...data];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const type = () => {
    // Current word
    const currentWord = words[wordIndex];
    // Determine the function to be performed
    const shouldDelete = isDeleting ? 1 : -1;
    // Create the new text
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    // Determine if this word is complete
    if (!isDeleting && text === currentWord) {
      // Make a pause at the end
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);
    }
  }

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);
    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
    // Add dependencies to the dependency array
  }, [wordIndex, isDeleting, text]);

  return (
    <>
      <h2 className="text-[#00ffff] h-[30px] text-[25px] 2xl:text-[40px] 2xl:h-[50px]">{text}</h2>
    </>
  );
};

export default TypeAnimation;
