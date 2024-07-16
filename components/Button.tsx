export interface ButtonProps {
  text: string;
  link: string;
  newTab?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, link, newTab }) => {
  return (
    <a href={link} target={newTab ? "_blank" : ""}>
      <div className="bg-rose-400 w-32 px-10 py-4 shadow-md rounded-md text-white hover:bg-rose-700 hover:scale-105 transition-all">
        {text}
      </div>
    </a>
  );
};

export default Button;
