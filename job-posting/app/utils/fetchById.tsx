import { ResponseData } from "./types";

export const getJob = async (id: number): Promise<ResponseData> => {
  const res = await fetch(
    `https://akil-backend.onrender.com/opportunities/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch job");
  }
  const resJson: ResponseData = await res.json();
  return resJson;
};
