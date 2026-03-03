import BottomNav from "../../components/BottomNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pb-16">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
