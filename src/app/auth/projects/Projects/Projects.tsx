"use client";
import { ProjectType } from "@/types/projects";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects({ projects }: { projects: ProjectType[] }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusedProjects, setStatusedProjects] = useState(projects);
  const [filter, setFilter] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (statusFilter === "All") {
      setStatusedProjects(projects);
    } else {
      const statused = projects.filter((project: ProjectType) => {
        return project.status
          .toLowerCase()
          .includes(statusFilter.toLowerCase());
      });
      setStatusedProjects(statused);
    }
  }, [statusFilter, projects]);

  useEffect(() => {
    const filteredProjects = statusedProjects.filter((project: ProjectType) => {
      return project.title.toLowerCase().includes(filter.toLowerCase());
    });
    setFilteredProjects(filteredProjects);
  }, [filter, statusedProjects]);

  const filters = [
    { label: "All" },
    { label: "In progress" },
    { label: "Completed" },
    { label: "Pending" },
    { label: "Rejected" },
  ];

  const categories = [
    { label: "STATUS" },
    { label: "TITLE" },
    { label: "DETAILS" },
    { label: "PRICE" },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full h-[90%] flex flex-col mt-[40px]">
        <div>
          <div className="w-full border-b-[1px] px-[20px] flex justify-between">
            <div className="flex gap-[20px]">
              {filters.map((el, index) => {
                return (
                  <button
                    value={el.label}
                    className="h-[50px] flex flex-col justify-between"
                    onClick={(e) => {
                      setStatusFilter(e.currentTarget.value);
                    }}
                    key={`f_${index}`}
                  >
                    <p>{el.label}</p>
                    {el.label === statusFilter && (
                      <div className="h-[5px] w-full bg-[#2d2d2d] rounded-t-[3px]"></div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="gap-[20px] flex">
              <input
                className="text-[#9ca3af] pl-[15px] bg-[#f5f5f5] h-[40px] w-[200px] rounded-[6px] outline-none"
                type="text"
                onChange={(e) => {
                  setFilter(e.currentTarget.value);
                }}
                placeholder="Search"
              />
              <Link
                href="/auth/projects/create"
                className="text-white bg-[#2d2d2d] h-[40px] w-[200px] rounded-[6px] flex items-center justify-center"
              >
                Create project
              </Link>
            </div>
          </div>
          <div className="w-full h-[50px] px-[20px] flex items-center justify-between border-b-[1px]">
            {categories.map((category, index) => {
              return (
                <p
                  key={`c_${index}`}
                  className="w-[200px] text-[#2d2d2d] text-ellipsis text-nowrap overflow-hidden"
                >
                  {category.label}
                </p>
              );
            })}
          </div>
          <div className="h-[80%] w-full overflow-y-scroll grow">
            {filteredProjects.map((project, index: number) => {
              return (
                <Link
                  href={`/auth/projects/${project.id}`}
                  className="w-full h-[50px] border-b-[1px] flex justify-between px-[20px] items-center"
                  key={`p_${index}`}
                >
                  <div className="w-[200px] text-ellipsis text-nowrap overflow-hidden flex items-center gap-[10px]">
                    <span
                      style={{
                        backgroundColor:
                          project.status === "Completed"
                            ? "#688B58"
                            : project.status === "In progress"
                            ? "#4DA2E7"
                            : project.status === "Rejected"
                            ? "#C11730"
                            : "#2d2d2d",
                      }}
                      className="h-[7px] w-[7px] rounded-[20px]"
                    ></span>
                    <p>{project.status}</p>
                  </div>
                  <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                    {project.title}
                  </p>
                  <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                    {project.details}
                  </p>
                  <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                    {project.price}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
