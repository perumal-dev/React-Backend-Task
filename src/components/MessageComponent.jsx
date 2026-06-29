const MessageComponent = ({ message }) => {
  return (
    <div className="bg-green-100 rounded-lg p-6 shadow">
      <h2 className="text-xl font-bold mb-3">
        Message
      </h2>

      <p>{message}</p>
    </div>
  );
};

export default MessageComponent;