"use client";
import { UserType } from "@/types/users";
import useWidth from "@/utils/useWidth";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Users({ users }: { users: UserType[] }) {
  const categories = [{ label: "NAME" }, { label: "EMAIL" }, { label: "ROLE" }];

  const [statusFilter, setStatusFilter] = useState("All");
  const [statusedUsers, setStatusedUsers] = useState(users);
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const width = useWidth();

  useEffect(() => {
    if (statusFilter === "All") {
      setStatusedUsers(users);
    } else {
      const statused = users.filter((user: UserType) => {
        return user.role.toLowerCase().includes(statusFilter.toLowerCase());
      });
      setStatusedUsers(statused);
    }
  }, [statusFilter, users]);

  useEffect(() => {
    const filteredUsers = statusedUsers.filter((user) => {
      return user.name.toLowerCase().includes(filter.toLowerCase());
    });
    setFilteredUsers(filteredUsers);
  }, [filter, statusedUsers]);

  const filters = [{ label: "All" }, { label: "User" }, { label: "Admin" }];

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

            <Link href="/auth/users/create">+</Link>
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
          {filteredUsers.map((user, index: number) => {
            return (
              <Link href={`/auth/tasks/${user.id}`} key={`p_${index}`}>
                <div className={styles.status}>
                  <p>{user.name}</p>
                </div>
                <p>{user.email}</p>

                {width > 1024 && (
                  <>
                    <p>{user.role}</p>
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
