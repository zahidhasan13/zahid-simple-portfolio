import Typewriter from "typewriter-effect";

const TypeWriterAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: ["Front End Developer.", "React Developer."],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriterAnimation;
