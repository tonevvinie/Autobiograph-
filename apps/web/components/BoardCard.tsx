import Link from "next/link";

export default function BoardCard({ title }: { title: string }) {
  return (
    <Link href={`/board/${title}`}>
      <div className="bg-white shadow rounded-lg p-4 h-32 flex items-center justify-center">
        {title}
      </div>
    </Link>
  );
}
