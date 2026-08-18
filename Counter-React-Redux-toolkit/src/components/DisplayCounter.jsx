import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return (
    <p className="counter-display lead mb-4 text-center">
      Counter value:{" "}
      <span className="counter-value">{counterVal}</span>
    </p>
  );
};

export default DisplayCounter;
