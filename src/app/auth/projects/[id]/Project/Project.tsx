"use client";
import { updateProject } from "@/app/actions/projects";
import { ProjectType, StateType } from "@/types/projects";
import Link from "next/link";
import { useState, useTransition } from "react";
import DeleteProject from "./DeleteProject/DeleteProject";
import Loading from "@/components/Loading/Loading";

export default function Project({ project }: { project: ProjectType }) {
  const [projectContent, setProjectContent] = useState<ProjectType>({
    id: project.id,
    title: project.title,
    deadline: project.deadline,
    details: project.details,
    status: project.status,
    netPrice: project.netPrice,
    tax: project.tax,
    price: project.price,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setProjectContent({
          ...projectContent,
          title: value,
        });
        break;
      case "deadline":
        setProjectContent({
          ...projectContent,
          deadline: value,
        });
        break;
      case "details":
        setProjectContent({
          ...projectContent,
          details: value,
        });
        break;
      case "status":
        setProjectContent({
          ...projectContent,
          status: value,
        });
        break;

      case "netPrice":
        setProjectContent({
          ...projectContent,
          netPrice: value,
        });
        break;
      case "tax":
        setProjectContent({
          ...projectContent,
          tax: value,
        });
        break;
      case "price":
        setProjectContent({
          ...projectContent,
          price: value,
        });
        break;
    }
  }

  const [state, setState] = useState<StateType>();
  const [isPending, startTransition] = useTransition();

  const updateProjectAction = () => {
    const formData = new FormData();
    formData.append("title", projectContent.title);
    formData.append("deadline", projectContent.deadline);
    formData.append("details", projectContent.details);
    formData.append("status", projectContent.status);
    formData.append("netPrice", projectContent.netPrice);
    formData.append("tax", projectContent.tax);
    formData.append("price", projectContent.price);
    startTransition(async () => {
      const state = await updateProject(formData, project.id);
      setState(state as StateType);
    });
  };

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex ">
        <div className="h-full w-[20%] bg-[#fbfbfb] flex items-center justify-center">
          <div className="w-[60%] flex flex-col items-center gap-[10px]">
            <div className="flex gap-[10px] items-center justify-start w-full">
              <span className="h-[10px] w-[10px] rounded-[20px] bg-[#a2a2a2]"></span>
              <Link
                href={`/auth/projects/${project.id}`}
                className="text-[20px] text-[#a2a2a2]"
              >
                General info
              </Link>
            </div>
            <div className="flex gap-[10px] items-center justify-start w-full">
              <span className="h-[10px] w-[10px] bg-[#2d2d2d] rounded-[20px]"></span>
              <Link
                href={`/auth/projects/${project.id}/comments`}
                className="text-[20px]"
              >
                Comments
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[80%] flex flex-col">
          <form
            action={updateProjectAction}
            id="updateProjectForm"
            className="w-full"
          >
            <div className="h-full w-full bg-white p-[30px] overflow-hidden">
              <div className="h-full w-[50%] flex flex-col gap-[30px] ">
                <span className="text-[25px]">General info</span>
                <div className="w-full h-full flex flex-col gap-[20px] ">
                  <div className="w-full h-[75px] flex gap-[20px]">
                    <div className="h-full w-[50%] flex flex-col gap-[10px]">
                      <span>Title</span>
                      <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={projectContent.title}
                        required
                        className="h-full w-full border-[1px] rounded-[10px] pl-[10px] outline-none"
                      />
                      {state?.errors?.title && <p>{state.errors.title}</p>}
                    </div>
                    <div className="h-full w-[50%] flex flex-col gap-[10px]">
                      <span>Deadline</span>
                      <input
                        type="text"
                        name="deadline"
                        onChange={handleChange}
                        value={projectContent.deadline}
                        required
                        className="h-full w-full border-[1px] rounded-[10px] pl-[10px] outline-none"
                      />
                      {state?.errors?.deadline && (
                        <p>{state.errors.deadline}</p>
                      )}
                    </div>
                  </div>
                  <div className="h-[75px] w-full flex flex-col gap-[10px]">
                    <span>Details</span>
                    <input
                      type="text"
                      name="details"
                      onChange={handleChange}
                      value={projectContent.details}
                      id="projectDetails"
                      required
                      className="h-full w-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                    />
                    {state?.errors?.details && <p>{state.errors.deadline}</p>}
                  </div>
                  <div className="w-full h-[75px] flex gap-[20px]">
                    <div className="h-full w-[50%] flex flex-col gap-[10px]">
                      <span>Status</span>
                      <select
                        className="h-full w-full border-[1px] rounded-[10px] outline-none"
                        name="status"
                        defaultChecked
                        onChange={handleChange}
                        value={projectContent.status}
                      >
                        <option value="Completed">Completed</option>
                        <option value="In progress">In progress</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-[75px] w-full flex flex-col gap-[10px]">
                    <span>Net price</span>
                    <input
                      value={projectContent.netPrice}
                      type="text"
                      name="netPrice"
                      onChange={handleChange}
                      required
                      className="h-full w-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                    />
                    {state?.errors?.netPrice && <p>{state.errors.netPrice}</p>}
                  </div>
                  <div className="h-[75px] w-full flex flex-col gap-[10px]">
                    <span>Tax</span>
                    <input
                      type="text"
                      name="tax"
                      required
                      onChange={handleChange}
                      value={projectContent.tax}
                      className="h-full w-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                    />
                    {state?.errors?.tax && <p>{state.errors.tax}</p>}
                  </div>
                  <div className="h-[75px] w-full flex flex-col gap-[10px]">
                    <span>Price</span>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="price"
                      value={projectContent.price}
                      required
                      className="h-full w-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                    />
                    {state?.errors?.price && <p>{state.errors.price}</p>}
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="h-[50px] w-[50%] flex gap-[20px] px-[30px]">
            <button
              className="h-[50px] w-[50%] rounded-[10px] text-white bg-[#2d2d2d]"
              type="submit"
              form="updateProjectForm"
            >
              Update project
            </button>
            <DeleteProject id={project.id} />
          </div>
        </div>
      </div>

      {isPending && <Loading message="Updating project..." />}
    </div>
  );
}
