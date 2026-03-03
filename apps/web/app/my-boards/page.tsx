import BoardCard from "../../components/BoardCard";

export default function MyBoards() {
  const dummyBoards = [1, 2, 3];
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {dummyBoards.map((id) => (
        <BoardCard key={id} title={`Board ${id}`} />
      ))}
    </div>
  );
}
