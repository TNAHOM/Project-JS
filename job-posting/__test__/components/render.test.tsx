import React from "react";
import { render, screen } from "@testing-library/react";
import SingleJob from "@/components/SingleJob";
import { SessionProvider } from "next-auth/react";

// Mock next/link
jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => {
    return children;
  };
});

// Mock next-auth
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({
    data: {
      user: {
        data: {
          accessToken: "mock-token",
        },
      },
    },
  })),
  SessionProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

// Mock Bookmark component
jest.mock("../../components/bookmark", () => {
  return function MockBookmark() {
    return <div data-testid="mock-bookmark">Bookmark</div>;
  };
});

describe("SingleJob Component", () => {
  const mockJob = {
    id: "657063e2144042c215319530",
    title: "Software Engineer",
    orgName: "Acme Inc.",
    description: "Develop and maintain web applications.",
    logoUrl: "/job1.png",
    bookmarked: new Set<string>(["657063e2144042c215319530"]),
    setBookmarked: jest.fn(),
  };

  it("should render correctly with the job details", () => {
    render(
      <SessionProvider session={null}>
        <SingleJob job={mockJob} />
      </SessionProvider>
    );

    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Acme Inc.")).toBeInTheDocument();
    expect(
      screen.getByText("Develop and maintain web applications.")
    ).toBeInTheDocument();
    expect(screen.getByTestId("mock-bookmark")).toBeInTheDocument();
  });

  it("should render 'Logo not available' when logoUrl is empty", () => {
    const jobWithoutLogo = { ...mockJob, logoUrl: "" };
    render(
      <SessionProvider session={null}>
        <SingleJob job={jobWithoutLogo} />
      </SessionProvider>
    );

    expect(screen.getByText("Logo not avialable")).toBeInTheDocument();
  });
});
