"use client";
import { createProject } from "@/app/actions/projects";
import Link from "next/link";
import { useActionState } from "react";

export default function CreateProject() {
  const initialState = {
    errors: {
      title: [],
      deadline: [],
      details: [],
      status: [],
      netPrice: [],
      tax: [],
      price: [],
    },
    message: undefined,
  };

  const [state, createProjectAction, isPending] = useActionState(
    createProject,
    initialState
  );

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex">
        <div className="h-full w-[20%] bg-[#fbfbfb] flex items-center justify-center">
          <div className="w-[60%] flex flex-col items-center gap-[10px]">
            <div className="flex gap-[10px] items-center justify-start w-full">
              <span className="h-[10px] w-[10px] rounded-[20px] bg-[#a2a2a2]"></span>
              <Link
                href="/auth/projects/create"
                className="text-[20px] text-[#a2a2a2]"
              >
                General info
              </Link>
            </div>
            <div className="flex gap-[10px] items-center justify-start w-full">
              <span className="h-[10px] w-[10px] bg-[#2d2d2d] rounded-[20px]"></span>
              <button
                type="button"
                onClick={() => {
                  alert("You must create project first");
                }}
                className="text-[20px]"
              >
                Comments
              </button>
            </div>
          </div>
        </div>
        <form
          action={createProjectAction}
          id="createProjectForm"
          className="h-full w-[80%]"
        >
          <div className="h-full w-full bg-white p-[30px] overflow-hidden">
            <div className="h-full w-[50%] flex flex-col gap-[30px] ">
              <span className="text-[25px]">General info</span>
              <div className="w-full h-full flex flex-col gap-[20px] ">
                <div className="w-full h-[80px] flex gap-[20px]">
                  <div className="w-[50%] flex flex-col gap-[10px]">
                    <span>Title</span>
                    <input
                      type="text"
                      name="title"
                      required
                      className="w-full h-full border-[1px] rounded-[10px] pl-[10px] outline-none"
                    />
                    {state?.errors?.title && <p>{state.errors.title}</p>}
                  </div>
                  <div className="w-[50%] h-full flex flex-col gap-[10px]">
                    <span>Deadline</span>
                    <input
                      type="text"
                      name="deadline"
                      required
                      className="h-full w-full border-[1px] rounded-[10px] pl-[10px] outline-none"
                    />
                    {state?.errors?.deadline && <p>{state.errors.deadline}</p>}
                  </div>
                </div>
                <div className="w-full h-[80px] flex flex-col gap-[10px]">
                  <span>Details</span>
                  <input
                    type="text"
                    name="details"
                    required
                    className="h-full w-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                  />
                  {state?.errors?.details && <p>{state.errors.deadline}</p>}
                </div>
                <div className="w-full h-[75px] flex gap-[20px]">
                  <div className="w-[50%] h-full flex flex-col gap-[10px]">
                    <span>Status</span>
                    <select
                      className="h-full w-full border-[1px] rounded-[10px] outline-none"
                      name="status"
                    >
                      <option value="Completed">Completed</option>
                      <option value="In progress">In progress</option>
                      <option value="Pending">Pending</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
                <div className="w-full h-[80px] flex flex-col gap-[10px]">
                  <span>Net price</span>
                  <input
                    type="text"
                    name="netPrice"
                    required
                    className="h-full w-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                  />
                  {state?.errors?.netPrice && <p>{state.errors.netPrice}</p>}
                </div>
                <div className="w-full h-[80px] flex flex-col gap-[10px]">
                  <span>Tax</span>
                  <input
                    type="text"
                    name="tax"
                    required
                    className="h-full w-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                  />
                  {state?.errors?.tax && <p>{state.errors.tax}</p>}
                </div>
                <div className="w-full h-[80px] flex flex-col gap-[10px]">
                  <span>Price</span>
                  <input
                    type="text"
                    name="price"
                    required
                    className="h-full w-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                  />
                  {state?.errors?.price && <p>{state.errors.price}</p>}
                </div>
                <div className="w-full">
                  <button
                    className="h-[50px] w-[50%] rounded-[10px] text-white bg-[#2d2d2d]"
                    type="submit"
                    form="createProjectForm"
                  >
                    Create Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {isPending && (
        <div className="w-screen h-screen top-0 left-0 fixed bg-white flex items-center justify-center text-[20px] font-[500]">
          <p>Creating project...</p>
        </div>
      )}
    </div>
  );
}
