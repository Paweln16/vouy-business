"use client";
import { TaskType } from "@/types/tasks";
import Link from "next/link";
import { useEffect, useState } from "react";
import useWidth from "@/utils/useWidth";
import styles from "./styles.module.scss";

export default function Tasks({ tasks }: { tasks: TaskType[] }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusedTasks, setStatusedTasks] = useState(tasks);
  const [filter, setFilter] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const width = useWidth();

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
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.top}>
          {width < 1024 && (
            <div className={styles.filter}>
              <button>Filter</button>
            </div>
          )}
          {width > 1024 && (
            <div className={styles.filters}>
              {filters.map((el, index) => {
                return (
                  <button
                    value={el.label}
                    onClick={(e) => {
                      setStatusFilter(e.currentTarget.value);
                    }}
                    key={`f_${index}`}
                  >
                    <p>{el.label}</p>
                    {el.label === statusFilter && <div></div>}
                  </button>
                );
              })}
            </div>
          )}

          <div className={styles.utils}>
            {width < 1024 && (
              <button className={styles.openSearch} type="button">
                &#x1F50D;
              </button>
            )}
            {width > 1024 && (
              <input
                type="text"
                onChange={(e) => {
                  setFilter(e.currentTarget.value);
                }}
                placeholder="Search"
              />
            )}

            <Link href="/auth/tasks/create">+</Link>
          </div>
        </div>
        <div className={styles.categories}>
          {width < 1024 && (
            <>
              <p>{categories[0].label}</p>
              <p>{categories[1].label}</p>
            </>
          )}

          {width >= 1024 &&
            categories.map((category, index) => {
              return <p key={index}>{category.label}</p>;
            })}
        </div>
        <div className={styles.projectsWrapper}>
          {filteredTasks.map((task, index: number) => {
            return (
              <Link href={`/auth/tasks/${task.id}`} key={`p_${index}`}>
                <div className={styles.status}>
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
                  ></span>
                  <p>{task.status}</p>
                </div>
                <p>{task.title}</p>

                {width > 1024 && (
                  <>
                    <p>{task.details}</p>
                    <p>{task.deadline}</p>
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
