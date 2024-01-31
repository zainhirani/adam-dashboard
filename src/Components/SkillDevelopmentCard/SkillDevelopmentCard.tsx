interface DevelopmentCardsProps {
    title: string;
    rating: string;
    icon: string;
  }

const SkillDevelopmentCard = ({
    title,
    rating,
    icon,
  }: DevelopmentCardsProps) => {
  return (
    <div className="flex rounded-2xl items-center gap-5 p-5 m-2 bg-custom-purple-200 divide-x border-2 border-custom-purple-200 hover:border-custom-purple-400">
      <div className="flex bg-custom-purple-300 w-9 h-9 items-center justify-center rounded-full">
        <img src={icon} alt="rocket" />
      </div>
      <div className="contentBox ps-5">
        <h3 className="font-medium text-xs">{title}</h3>
        <p className="font-bold text-2xl">{rating}</p>
      </div>
    </div>
  );
};

export default SkillDevelopmentCard;
