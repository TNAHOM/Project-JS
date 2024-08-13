"use client";
import React, { useState, useEffect } from "react";
import { BookmarkIcon as BkOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BkSolid } from "@heroicons/react/24/solid";
import axios from "axios";
import { JobPosting } from "@/app/utils/types";

const Bookmark = ({ job, token }: { job: JobPosting; token: string }) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const res = await axios.get(
          `https://akil-backend.onrender.com/bookmarks`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.data && res.data.success) {
          const isBookmarked = res.data.data.some(
            (bookmark: { eventID: string }) => bookmark.eventID === job.id
          );
          setIsBookmarked(isBookmarked);
        }
      } catch (e) {
        console.error("Fetch bookmark error:", e);
      }
    };
    fetchBookmark();
  }, [job.id, token]);

  const toggleBookmark = async () => {
    try {
      const method = isBookmarked ? "delete" : "post";
      const res = await axios[method](
        `https://akil-backend.onrender.com/bookmarks/${job.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setIsBookmarked(!isBookmarked);
      }
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  return (
    <div>
      {isBookmarked ? (
        <BkSolid
          data-testid="unbookmark-button"
          className="text-[20px] text-indigo-700 col-span-1 cursor-pointer"
          onClick={toggleBookmark}
        />
      ) : (
        <BkOutline
          data-testid="bookmark-button"
          className="text-[20px] col-span-1 cursor-pointer"
          onClick={toggleBookmark}
        />
      )}
    </div>
  );
};

export default Bookmark;
