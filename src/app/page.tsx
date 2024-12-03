export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-[20px]">
      <p className="text-[20px]">VOUY</p>
      <a
        href="/signin"
        className="text-[20px] text-white bg-[#2d2d2d] px-[20px] py-[6px] rounded-[8px]"
      >
        Sign in
      </a>
    </div>
  );
}
