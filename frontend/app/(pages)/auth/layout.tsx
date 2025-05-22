import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - Ground Cow",
  description: "Authentication page for Ground Cow",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
