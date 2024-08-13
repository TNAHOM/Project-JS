import "./globals.css";
import Nav from "@/components/Nav";
import SessionWrapper from "@/components/SessionWrapper";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>
          <Nav />
          <div>{children}</div>
        </body>
      </html>
    </SessionWrapper>
  );
}
