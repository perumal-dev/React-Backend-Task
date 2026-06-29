const UserCard = ({ name, role, backgroundColor }) => {
  return (
    <div
      className="p-6 rounded-lg shadow-lg text-white"
      style={{ backgroundColor }}
    >
      <h2 className="text-2xl font-bold">{name}</h2>

      <p className="mt-2 text-lg">
        Role : {role}
      </p>
    </div>
  );
};

export default UserCard;