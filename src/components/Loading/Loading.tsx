export default function Loading({ message }: { message: string }) {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center fixed top-0 left-0 text-black font-[500] text-[20px]">
      <p>{message}</p>
    </div>
  );
}
