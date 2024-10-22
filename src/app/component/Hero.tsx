"use client";
import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import Link from "next/link";

const Hero = () => {
  const videos = [
    {
      id: 1,
      thumbnail: "/harry.jpg",
      title: "Python Tutorial For Beginners in Hindi | Complete Python Course",
      channel: "CodewithHarry",
      views: "3m views",
      time: "1 months ago",
      sponsored: true,
    },
    {
      id: 2,
      thumbnail: "/dhuruv.jpg",
      title:
        "Arvind Kejriwal Jailed! | DICTATORSHIP Confirmed? | Dhruv Rathee",
      channel: "Dhuru Rathee",
      views: "57M views",
      time: "3 months ago",
      sponsored: false,
    },
    {
      id: 3,
      thumbnail: "/Deshbhakt.jpg",
      title: 'Indian Wrestlers vs "Don" Brij Bhushan Singh | End of Dissent',
      channel: "Deshbhakt",
      views: "685K views",
      time: "4 hours ago",
      sponsored: false,
    },
    {
      id: 4,
      thumbnail: "/ads.jpg",
      title: "Fix typos, add or swap images...",
      channel: "Adobe Document Cloud Media",
      views: "Sponsored",
      time: "",
      sponsored: true,
    },
    {
      id: 5,
      thumbnail: "/dwapara.jpg",
      title: "Dwapara Lyrical | Krishnam Pranaya Sakhi | Golden⭐Ganesh",
      channel: "Anand Audio",
      views: "57M views",
      time: "3 months ago",
      sponsored: false,
    },
    {
      id: 6,
      thumbnail: "/bagheera.jpg",
      title: "Bagheera Kannada Official Trailer",
      channel: "Hombale Films",
      views: "685K views",
      time: "4 hours ago",
      sponsored: false,
    },
  ];

  return (
    <div className="w-full h-full mt-3 bg-cover bg-center bg-no-repeat">
      {/* Main welcome section */}
      <div className="flex flex-col items-center justify-center h-1/3">
        <p className="text-xl sm:text-3xl md:text-5xl font-bold text-center mt-6">
          Welcome to the Awesome
        </p>
        <ReactTyped
          className="text-xl sm:text-3xl md:text-5xl font-bold md:pl-4 pl-2"
          strings={["world"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-white p-2 rounded-lg shadow-md">
            <div className="relative">
              <Image
                src={video.thumbnail}
                alt={video.title}
                className="rounded-lg"
                width={400}
                height={220}
                layout="responsive"
              />
            </div>
            <div className="mt-2">
              <p className="font-medium">{video.title}</p>
              <p className="text-sm text-gray-500">
                {video.channel}{" "}
                {video.sponsored && (
                  <span className="text-red-500">Sponsored</span>
                )}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm mt-2 text-gray-500">
                  {video.views} {video.time && `• ${video.time}`}
                </p>
                <Link href="/video" passHref>
                  <button className="bg-blue-500 w-20 md:w-28 h-8 rounded-lg text-white">
                    Click
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
