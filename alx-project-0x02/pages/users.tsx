import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
  );
}

// Fetch users at build time
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // Map API data to UserProps
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const users: UserProps[] = data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
    }));

    return {
      props: { users },
      revalidate: 60, // optional ISR
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: { users: [] },
    };
  }
}
