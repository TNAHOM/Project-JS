export interface JobPosting {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null;
  perksAndBenefits: string | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}

export interface ResponseData {
  success: boolean;
  message: string;
  data: JobPosting;
}

export interface Bookmark {
  eventID: number;
  title: string;
  opType: "inPerson" | "virtual"; // Define the possible values for opType
  orgName: string;
  datePosted: string; // ISO 8601 date string
  dateBookmarked: string; // ISO 8601 date string
  logoUrl: string;
  location: string;
}
