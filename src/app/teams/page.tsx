"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import bannerPic from "@/assets/our-people-banner.jpg";
import bannerPic2 from "@/assets/our-people-banner2.jpg";
import { FC } from "react";
import Image from "next/image";
import { UserResponse } from "@/types/User";
import fetchUsers from "@/api/fetchUsers";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import UserCard from "@/components/UserCard";
import userTitle from "@/static/userTitle";

const Teams: FC = () => {
  const { data, error, isLoading } = useQuery<UserResponse, Error>({
    queryKey: ["users"], // Query key
    queryFn: fetchUsers, // Fetch function
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data?.results);
  return (
    <>
      <Navbar></Navbar>
      <Hero desc="Our People" image={bannerPic}></Hero>

      <section className="flex py-20 px-40">
        <div className="grid grid-cols-2 gap-32 justify-center">
          <Image src={bannerPic2} alt="banner"></Image>
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl">Our people are vital to our success</h1>
            <div className=" space-y-3">
              <h2 className="text-2xl font-bold">
                An expert, multi-disciplinary team
              </h2>
              <p className="text-lg">
                Our highly differentiated team members are experts at what they
                do. Our life sciences investment team members have deep
                technical scientific background, supplemented by strong
                commercial experience ranging from venture capital investment to
                pharmaceutical launch. This skill set has resulted in a strong
                network in life science, enabling the best talent to be
                attracted at the level of Syncona&apos;s portfolio companies.
              </p>
            </div>
            <div className=" space-y-3">
              <h2 className="text-2xl font-bold">
                Attracting world-class talent
              </h2>
              <p className="text-lg">
                Working in close partnership with our portfolio company
                management teams is core to Syncona&apos;s model.
              </p>
            </div>
            <div className=" space-y-3">
              <h2 className="text-2xl font-bold">
                An experienced and balanced board
              </h2>
              <p className="text-lg">
                Our fully independent board promotes a culture of openness and
                debate and exercises effective stewardship over the
                Company&apos;s activities in the interests of all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-40 bg-synconaltdLightGray">
        <div className="grid grid-cols-2 mb-20">
          <h1 className="text-3xl">The Syncona team</h1>
          <h2 className="text-xl">
            Please navigate below to see the members of the Syncona Investment
            Management Limited Investment team, as well as key members of the
            Executive Partner group, Legal, HR, Launch, Finance, IR and
            Corporate Affairs, and Support functions.
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-y-12">
          {data?.results.map((user, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <UserCard name={user.name} picture={user.picture}></UserCard>
              <div className="text-lg">{userTitle[index].title}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

const UserWithProvider = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Teams />
    </QueryClientProvider>
  );
};

export default UserWithProvider;
