"use client";
import { TaskType } from "@/types/tasks";
import Link from "next/link";
import { useEffect, useState } from "react";
import Creator from "../Creator/Creator";

export default function Tasks({ tasks }: { tasks: TaskType[] }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusedTasks, setStatusedTasks] = useState(tasks);
  const [filter, setFilter] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [isActiveCreator, setIsActiveCreator] = useState(false);

  useEffect(() => {
    if (statusFilter === "All") {
      setStatusedTasks(tasks);
    } else {
      const statused = tasks.filter((task) => {
        return task.status.toLowerCase().includes(statusFilter.toLowerCase());
      });
      setStatusedTasks(statused);
    }
  }, [statusFilter, tasks]);

  useEffect(() => {
    const filteredTasks = statusedTasks.filter((task) => {
      return task.title.toLowerCase().includes(filter.toLowerCase());
    });
    setFilteredTasks(filteredTasks);
  }, [filter, statusedTasks]);

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
    { label: "DEADLINE" },
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
              <button
                onClick={() => {
                  setIsActiveCreator(!isActiveCreator);
                }}
                className="text-white bg-[#2d2d2d] h-[40px] w-[200px] rounded-[6px] flex items-center justify-center"
              >
                Create task
              </button>
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
            {filteredTasks.map((task, index: number) => {
              return (
                <Link
                  href={`/auth/tasks/${task.id}`}
                  className="w-full h-[50px] border-b-[1px] flex justify-between px-[20px] items-center"
                  key={`p_${index}`}
                >
                  <div className="w-[200px] text-ellipsis text-nowrap overflow-hidden flex items-center gap-[10px]">
                    <span
                      style={{
                        backgroundColor:
                          task.status === "Completed"
                            ? "#688B58"
                            : task.status === "In progress"
                            ? "#4DA2E7"
                            : task.status === "Rejected"
                            ? "#C11730"
                            : "#2d2d2d",
                      }}
                      className="h-[7px] w-[7px] rounded-[20px]"
                    ></span>
                    <p>{task.status}</p>
                  </div>
                  <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                    {task.title}
                  </p>

                  <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                    {task.deadline}
                  </p>
                  <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                    {task.details}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {isActiveCreator && <Creator />}
    </div>
  );
}
