import EntryThumbnail from "../../../components/EntryThumbnail";

export default function BoardPage() {
  const dummyEntries = [1, 2, 3, 4, 5, 6];
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {dummyEntries.map((id) => (
        <EntryThumbnail key={id} />
      ))}
    </div>
  );
}
