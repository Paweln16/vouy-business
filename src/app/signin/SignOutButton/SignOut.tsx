import { signOut } from "@/app/actions/auth";

export default function SignOutButton() {
  return (
    <form
      action={signOut}
      className="bg-[#2d2d2d] h-[35px] flex items-center justify-center text-white rounded-[5px] px-[15px]"
    >
      <button type="submit"> Sign out</button>
    </form>
  );
}
