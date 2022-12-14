type Props = {
  to: string;
  text: string;
  onClick?: () => void;
};

const NavItem = (props: Props) => {
  return (
    <li className="relative text-xl font-medium group" onClick={props.onClick}>
      <a href={props.to}>{props.text}</a>
      <div
        className={`absolute h-[2px] bg-accent -bottom-[1px] w-0 group-hover:w-full  transition-all duration-300`}
      />
    </li>
  );
};

export default NavItem;
