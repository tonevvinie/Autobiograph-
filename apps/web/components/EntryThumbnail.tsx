export default function EntryThumbnail({ thumbnailUrl }: { thumbnailUrl?: string }) {
  return (
    <div className="bg-gray-200 rounded-lg h-40 w-full flex items-center justify-center">
      {thumbnailUrl ? <img src={thumbnailUrl} className="object-cover h-full w-full rounded-lg" /> : "Video"}
    </div>
  );
}
