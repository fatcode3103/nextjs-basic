import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook Info",
  description: "Generated by create next app",
};

export default function FaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <span>Facebook detail</span>
        <div>{children}</div>
    </div>
  );
}
