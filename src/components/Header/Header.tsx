"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "../../app/signin/SignOutButton/SignOut";

export default function Header() {
  const links = [
    { label: "Dashboard", href: "/auth/dashboard" },
    { label: "Invoices", href: "/auth/invoices" },
    { label: "Projects", href: "/auth/projects" },
    { label: "Orders", href: "/auth/orders" },
    { label: "Tasks", href: "/auth/tasks" },
    { label: "Users", href: "/auth/users" },
    { label: "Company", href: "/auth/company" },
  ];

  const pathname = usePathname();
  const path = pathname;

  function getPathUntilSecondSlash(path: string) {
    const match = path.match(/^\/[^/]+\/[^/]+/);
    return match ? match[0] : null;
  }

  return (
    <div className="w-screen h-[100px] bg-white fixed top-0 left-0 flex items-center px-[30px] gap-[100px]">
      <div>
        <Link href="/auth/dashboard" className="font-[600] text-[20px]">
          VOUY
        </Link>
      </div>
      <div className="flex gap-[25px]">
        {links.map((link, index) => {
          return (
            <Link
              style={{
                color:
                  link.href === getPathUntilSecondSlash(path)
                    ? "#000000"
                    : "#979797",
              }}
              key={index}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="w-full mb-[15px] flex justify-end">
        <SignOutButton />
      </div>
    </div>
  );
}
