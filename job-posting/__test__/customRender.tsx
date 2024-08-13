import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const customRender = (ui: ReactNode, session: any = null) => {
  return render(<SessionProvider session={session}>{ui}</SessionProvider>);
};

export * from "@testing-library/react";
export { customRender as render };
