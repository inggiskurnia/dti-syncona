import { UserResponse } from "@/types/User";

const fetchUsers = async (): Promise<UserResponse> => {
  const response = await fetch("https://randomuser.me/api/?results=10&nat=us");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default fetchUsers;
