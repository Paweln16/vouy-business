"use client";
import { signIn } from "@/app/actions/auth";
import Loading from "@/components/Loading/Loading";
import useWidth from "@/utils/useWidth";
import Image from "next/image";
import { useActionState } from "react";
import styles from "./styles.module.scss";

export default function SigninForm() {
  const initialState = {
    errors: {
      email: [],
      password: [],
    },
  };

  const width = useWidth();

  const [state, action, isPending] = useActionState(signIn, initialState);

  return (
    <div className={styles.signin}>
      <div className={styles.left}>
        <div className={styles.container}>
          <span className={styles.heading}>Sign in</span>
          <form action={action}>
            <div className={styles.el}>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" />
              {state?.errors?.email && <p>{state.errors.email}</p>}
            </div>

            <div className={styles.el}>
              <span>Password</span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
              />
              {state?.errors?.password && <p>{state.errors.password}</p>}
            </div>
            <div className={styles.button}>
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>

      {width > 1024 && (
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
      )}

      {isPending && <Loading message="Loading..." />}
    </div>
  );
}
