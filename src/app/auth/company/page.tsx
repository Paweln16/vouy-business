import Revenue from "./Revenue/Revenue";
import Taxes from "./Taxes/Taxes";

export default async function Page() {
  return (
    <div className="h-screen w-screen pt-[100px] px-[20px] flex flex-col gap-[20px] justify-center items-center">
      <div className="w-full h-[50%] flex gap-[20px] justify-center">
        <Revenue />
        <Taxes />
      </div>
      <div className="w-full h-[50%] flex gap-[20px] justify-center"></div>
    </div>
  );
}
