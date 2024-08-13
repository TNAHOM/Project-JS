import React from "react";
import { render, fireEvent, waitFor } from "@/__test__/customRender";
import axios from "axios";
import Bookmark from "../../components/bookmark";
import SingleJob from "@/components/SingleJob";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Bookmark Component", () => {
  const mockJob = {
    id: "657063e2144042c215319530",
    title: "Software Engineer",
    company: "Acme Inc.",
    orgName: "Acme Inc.",
    description: "Develop and maintain web applications.",
    logoUrl: "/job1.png",
    bookmarked: new Set<string>(["657063e2144042c215319530"]),
    setBookmarked: jest.fn(),
  };

  const mockToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjIxMGIxNDk5MTYzMTk4NmIxNmUzZSIsInJvbGUiOiJ1c2VyIiwicHJvZmlsZVN0YXR1cyI6ImluY29tcGxldGUiLCJleHAiOjE3MjM4MDc2NjN9.W9mAfDKBKWMlNJOK9y4gSzYpjzns_AXofcCmkts0Jw4";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // it("should render correctly with the job details", () => {
  //   render(<SingleJob job={mockJob} />);
  //   expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  //   expect(screen.getByText("Acme Inc.")).toBeInTheDocument();
  //   expect(
  //     screen.getByText("Develop and maintain web applications.")
  //   ).toBeInTheDocument();
  // });

  it("should bookmark and unbookmark a job", async () => {
    // Mock initial GET request to check if job is bookmarked
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        success: true,
        data: [], // Simulate no bookmarks initially
      },
    });
    let job = {
      id: "657063e2144042c215319530",
      title: "Software Engineer",
      company: "Acme Inc.",
      orgName: "Acme Inc.",
      description: "Develop and maintain web applications.",
      logoUrl: "/job1.png",
      bookmarked: new Set<string>(["657063e2144042c215319530"]),
      setBookmarked: jest.fn(),
    };

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjIxMGIxNDk5MTYzMTk4NmIxNmUzZSIsInJvbGUiOiJ1c2VyIiwicHJvZmlsZVN0YXR1cyI6ImluY29tcGxldGUiLCJleHAiOjE3MjM4MDc2NjN9.W9mAfDKBKWMlNJOK9y4gSzYpjzns_AXofcCmkts0Jw4";

    // Mock POST request for bookmarking
    mockedAxios.post.mockResolvedValueOnce({ status: 200 });

    // Mock DELETE request for unbookmarking
    mockedAxios.delete.mockResolvedValueOnce({ status: 200 });

    const { getByTestId } = render(<Bookmark job={job} token={mockToken} />);

    // Wait for initial state to be set
    await waitFor(() => {
      expect(getByTestId("bookmark-button")).toBeInTheDocument();
    });

    // Click to bookmark
    fireEvent.click(getByTestId("bookmark-button"));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        `https://akil-backend.onrender.com/bookmarks/${mockJob.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mockToken}`,
          },
        }
      );
      expect(getByTestId("unbookmark-button")).toBeInTheDocument();
    });

    // Click to unbookmark
    fireEvent.click(getByTestId("unbookmark-button"));

    await waitFor(() => {
      expect(mockedAxios.delete).toHaveBeenCalledWith(
        `https://akil-backend.onrender.com/bookmarks/${mockJob.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mockToken}`,
          },
        }
      );
      expect(getByTestId("bookmark-button")).toBeInTheDocument();
    });
  });
});
