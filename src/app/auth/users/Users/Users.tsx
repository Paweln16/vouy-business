"use client";
import { UserType } from "@/types/users";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Users({ users }: { users: UserType[] }) {
  const categories = [{ label: "NAME" }, { label: "EMAIL" }, { label: "ROLE" }];

  const [statusFilter, setStatusFilter] = useState("All");
  const [statusedUsers, setStatusedUsers] = useState(users);
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

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
                href="/auth/users/create"
                className="text-white bg-[#2d2d2d] h-[40px] w-[200px] rounded-[6px] flex items-center justify-center"
              >
                Create user
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
            {filteredUsers.map((user, index: number) => {
              return (
                <Link
                  href={`/auth/users/${user.id}`}
                  className="w-full h-[50px] border-b-[1px] flex justify-between px-[20px] items-center"
                  key={`p_${index}`}
                >
                  <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                    {user.name}
                  </p>
                  <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                    {user.email}
                  </p>
                  <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                    {user.role}
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
