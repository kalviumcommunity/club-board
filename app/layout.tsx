import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <p>Club Board</p>
          <nav>
            {/* Task 1: add four Link elements here. See Assignment.md. */}
          </nav>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
