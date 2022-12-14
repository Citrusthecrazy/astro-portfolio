import React from "react";

type Props = {
  children: string;
};

const Subtitle = (props: Props) => {
  return (
    <div className="text-xs leading-4 text-subtitle text-center whitespace-nowrap lg:text-left">
      {props.children}
    </div>
  );
};

export default Subtitle;
