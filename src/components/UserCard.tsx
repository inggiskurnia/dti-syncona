import { FC } from "react";
import { User, UserResponse } from "@/types/User";
import Image from "next/image";

interface UserCardProps {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const UserCard: FC<UserCardProps> = ({ name, picture }) => {
  const { first, last } = name;
  return (
    <div className="flex flex-col items-center gap-3">
      <Image src={picture.large} alt="picture" width={300} height={300}></Image>
      <h2 className="text-2xl text-synconaltdPink">{`${first} ${last}`}</h2>
    </div>
  );
};

export default UserCard;
