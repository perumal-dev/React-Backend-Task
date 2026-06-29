import UserCard from "../components/UserCard";
import MessageComponent from "../components/MessageComponent";
import CounterDisplay from "../components/CounterDisplay";

import withBackgroundColor from "../hoc/withBackgroundColor";
import withUpperCase from "../hoc/withUpperCase";
import withCounter from "../hoc/withCounter";

const ColoredUserCard = withBackgroundColor(UserCard);

const UpperCaseMessage = withUpperCase(MessageComponent);

const Counter = withCounter(CounterDisplay);

const HocAssignment = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Higher Order Component Assignment
      </h1>

      <div className="space-y-8">
        <ColoredUserCard name="Perumal" role="Frontend Developer" />

        <UpperCaseMessage />

        <Counter />
      </div>
    </div>
  );
};

export default HocAssignment;
