"use client";
import { ProjectType } from "@/types/projects";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useWidth from "@/utils/useWidth";

export default function Projects({ projects }: { projects: ProjectType[] }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusedProjects, setStatusedProjects] = useState(projects);
  const [filter, setFilter] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const width = useWidth();

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
            {width < 1024 && <input type="text" placeholder="&#128270;" />}
            {width > 1024 && (
              <input
                type="text"
                onChange={(e) => {
                  setFilter(e.currentTarget.value);
                }}
                placeholder="Search"
              />
            )}
            {width > 1024 && (
              <Link href="/auth/projects/create">Create project</Link>
            )}
            <Link href="/auth/projects/create">+</Link>
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
          {filteredProjects.map((project, index: number) => {
            return (
              <Link href={`/auth/projects/${project.id}`} key={`p_${index}`}>
                <div className={styles.status}>
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
                  ></span>
                  <p>{project.status}</p>
                </div>
                <p>{project.title}</p>

                {width > 1024 && (
                  <>
                    <p>{project.details}</p>
                    <p>{project.price}</p>
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
