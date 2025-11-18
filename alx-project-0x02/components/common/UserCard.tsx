import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700 mt-1">Email: {email}</p>
      <p className="text-gray-500 mt-1">
        Address: {address.suite}, {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
