import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-2">
      <Link href="/">Home</Link>
      <Link href="/my-boards">My Boards</Link>
      <Link href="/record">Record</Link>
    </nav>
  );
}
