import BoardCard from "../components/BoardCard";

export default function Home() {
  const dummyBoards = [
    { id: "1", title: "Quiet Mornings" },
    { id: "2", title: "Night Work" },
    { id: "3", title: "Starting Over" },
  ];

  return (
    <main className="p-4 grid grid-cols-2 gap-4">
      {dummyBoards.map((board) => (
        <BoardCard key={board.id} title={board.title} />
      ))}
    </main>
  );
}
