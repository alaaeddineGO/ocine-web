import { FC } from "react";

interface HeadlingProps {
  title: string;
  isCentered?: boolean;
}

const Headling: FC<HeadlingProps> = ({ title, isCentered }) => {
  return (
    <h1
      className={`${
        isCentered && "text-start"
      } bg-clip-text text-transparent my-5 bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-3xl sm:text-4xl lg:text-5xl`}
    >
      {title}
    </h1>
  );
};

export default Headling;