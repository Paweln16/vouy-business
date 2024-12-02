"use client";
import { createTask } from "@/app/actions/tasks";
import Loading from "@/components/Loading/Loading";
import { useActionState } from "react";

export default function Creator() {
  const initialState = {
    errors: {
      title: [],
      deadline: [],
      details: [],
      status: [],
    },
    message: undefined,
  };
  const [state, action, isPending] = useActionState(createTask, initialState);

  return (
    <div className="fixed  top-0 right-0 bg-white shadow-xl h-full w-[40%] p-[40px] flex flex-col gap-[20px]">
      <span className="font-[600] text-[22px]">Create task</span>
      <form action={action} className="w-full flex flex-col gap-[15px]">
        <div className="h-[75px] w-full flex flex-col gap-[10px]">
          <span>Title</span>
          <input
            className="border-[1px] rounded-[10px] h-full pl-[10px]"
            type="text"
            name="title"
            id=""
          />
          {state?.errors?.title && <p>{state.errors.title}</p>}
        </div>
        <div className="h-[75px] w-full flex flex-col gap-[10px]">
          <span>Deadline</span>
          <input
            className="border-[1px] rounded-[10px] h-full pl-[10px]"
            type="text"
            name="deadline"
            id=""
          />
          {state?.errors?.deadline && <p>{state.errors.deadline}</p>}
        </div>
        <div className="h-[75px] w-full flex flex-col gap-[10px]">
          <span>Details</span>
          <input
            className="border-[1px] rounded-[10px] h-full pl-[10px]"
            type="text"
            name="details"
            id=""
          />
          {state?.errors?.details && <p>{state.errors.details}</p>}
        </div>
        <div className="h-[75px] w-full flex flex-col gap-[10px]">
          <span>Status</span>
          <select
            className="h-full w-full border-[1px] rounded-[10px]"
            name="status"
            id=""
          >
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
          {state?.errors?.status && <p>{state.errors.status}</p>}
        </div>
        <div className="h-[45px] w-full flex gap-[10px] mt-[20px]">
          <button
            type="submit"
            className="w-[50%] h-full rounded-[10px] bg-[#2d2d2d] text-white"
          >
            Create task
          </button>
          <button
            className="w-[50%] h-full rounded-[10px] "
            type="button"
            onClick={() => {}}
          >
            Cancel
          </button>
        </div>
      </form>

      {isPending && <Loading message="Creating task..." />}
    </div>
  );
}
