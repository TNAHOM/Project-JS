import React from "react";
import { Bookmark } from "../utils/types";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import SingleBookmark from "@/components/SingleBookmark";

const ListBookmark = async () => {
  const session = await getServerSession(authOptions);

  const getBookmark = async () => {
    try {
      const res = await fetch(`https://akil-backend.onrender.com/bookmarks`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.user.data.accessToken}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch bookmarks: ${res.statusText}`);
      }

      const resJson = await res.json();
      return resJson.data;
    } catch (e) {
      console.log(e, "errir page");
      return [];
    }
  };

  const bookmarks: Bookmark[] = await getBookmark();

  return (
    <div className="px-32 py-16 rounded-[30px]">
      <h2 className="main-line mb-[32px]">Bookmark Page</h2>
      <div className="flex flex-col gap-8">
        {bookmarks.map((bookmark: Bookmark) => (
          <div
            key={bookmark.eventID}
            className="grid grid-flow-col grid-cols-[94%_6%] gap-4"
          >
            <SingleBookmark eventId={bookmark.eventID} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBookmark;
