import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// CommentSection Component
const commentsData = [
  {
    id: 1,
    name: "P.S.Naganandhini 2606",
    comment: "Hi",
    time: "a days ago",
    image: "/zira.jpeg",
  },
  {
    id: 2,
    name: "Samruddhi Amravatkar",
    comment: "Hey",
    time: "a days ago",
    image: "samrud.jpeg",
  },
  {
    id: 3,
    name: "Chandu Bandi",
    comment: "hello 😍",
    time: "22 hours ago",
    image: "/chandu.jpg",
  },
  {
    id: 4,
    name: "meha",
    comment: "hy",
    time: "23 hour ago",
    image: "/meha.jpeg",
  },
  {
    id: 5,
    name: "simran",
    comment: "awesome",
    time: "2 day ago",
    image: "simran.jpeg",
  },
  {
    id: 6,
    name: "roy",
    comment: "thx",
    time: "3 day ago",
    image: "/roy.jpeg",
  },
];

const CommentSection = () => {
  return (
    <div className="w-full md:w-96 p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-4">6 Comments</h2>
      <div className="space-y-6 mt-3">
        {commentsData.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src={comment.image}
              alt={`${comment.name} avatar`}
            />
            <div>
              <h3 className="text-sm font-bold">{comment.name}</h3>
              <p className="text-gray-600 text-sm">{comment.comment}</p>
              <p className="text-xs text-gray-400">{comment.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/signup">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
            Sign in to leave a comment
          </button>
        </Link>
      </div>
    </div>
  );
};

// Main Page Component
const Page = () => {
  return (
    <div className="w-full h-auto mt-7 p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First Column (YouTube video and details) */}
        <div className="col-span-2">
          <div className="relative w-full h-full">
            <iframe
              className="rounded-2xl w-full h-full"
              src="https://www.youtube.com/embed/9B4CvtzXRpc?si=ljM3Pz9BZAysB4sn"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="mt-5 text-2xl md:text-3xl">Makerble</h1>
          <div className="flex items-center mt-3">
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src="/women.jpeg"
              alt="Profile"
            />
            <div className="ml-3">
              <h1 className="text-md">Ananthaprakash Thiyagarajan</h1>
              <p className="text-gray-500 text-sm">
                1842 views • Dec 12, 2023 6:08 AM
              </p>
            </div>
          </div>
        </div>

        {/* Second Column (Comment Section) */}
        <div className="w-full">
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default Page;
