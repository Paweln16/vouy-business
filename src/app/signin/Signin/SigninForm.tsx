"use client";
import { signIn } from "@/app/actions/auth";
import Loading from "@/components/Loading/Loading";
import Image from "next/image";
import { useActionState } from "react";

export default function SigninForm() {
  const initialState = {
    errors: {
      email: [],
      password: [],
    },
  };

  const [state, action, isPending] = useActionState(signIn, initialState);

  return (
    <div className="h-screen w-screen flex justify-center overflow-hidden">
      <div className="h-full w-[35%] flex items-center justify-center">
        <div className="w-[70%] flex flex-col gap-[100px]">
          <span className="text-[25px] font-[600]">Sign in</span>
          <form action={action} className=" flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[5px]">
              <span>Email</span>
              <input
                className="outline-none border-[1px] rounded-[7px] h-[50px] w-full pl-[10px]"
                type="email"
                name="email"
                autoComplete="email"
              />
              {state?.errors?.email && <p>{state.errors.email}</p>}
            </div>

            <div className="flex flex-col gap-[5px]">
              <span>Password</span>
              <input
                className="outline-none border-[1px] rounded-[7px] h-[50px] w-full pl-[10px]"
                type="password"
                name="password"
                autoComplete="current-password"
              />
              {state?.errors?.password && <p>{state.errors.password}</p>}
            </div>
            <div className="flex h-[50px] w-full">
              <button
                type="submit"
                className="bg-[#2d2d2d] w-full text-white rounded-[10px]"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-full w-[65%] relative flex items-center justify-center">
        <div className="h-[93%] w-[95%] relative overflow-hidden rounded-[15px]">
          <Image
            fill
            priority
            src="/signin-img.jpg"
            alt="signin-images"
            className="object-cover h-[90%] w-[90%]"
          />
        </div>
      </div>

      {isPending && <Loading message="Loading..." />}
    </div>
  );
}
