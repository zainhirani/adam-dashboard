interface ButtonGroupProps {
  title: string;
  link: string;
}

const ButtonGroup = ({ title, link }: ButtonGroupProps) => {
  return (
    <a
      href={link}
      className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-100 rounded-full hover:bg-custom-purple-400 hover:text-white focus:z-10 focus:bg-custom-purple-400 focus:text-white"
    >
      {title}
    </a>
  );
};

export default ButtonGroup;
