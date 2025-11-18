import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-2">{content}</div>
    </div>
  );
};

export default Card;
