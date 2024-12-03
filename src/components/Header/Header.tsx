"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "../../app/signin/SignOutButton/SignOut";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cubicBezier, delay, easeIn, stagger } from "motion";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const modalVariants = {
    hidden: {
      height: "0",
    },
    visible: {
      height: "100vh",
      transition: {
        type: "tween",
        ease: cubicBezier(0.65, 0, 0.35, 1),
        duration: 1.2, // Specify duration
      },
    },
    exit: {
      y: "-100vh",
      height: 0,
      transition: {
        type: "tween",
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: cubicBezier(0.65, 0, 0.35, 1),
      },
    },
    exit: {
      opacity: 0,
      y: "50%",
      transition: {
        duration: 0.1,
        ease: cubicBezier(0.65, 0, 0.35, 1),
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.9,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <div className="w-screen h-[100px] bg-white fixed top-0 left-0 z-10 flex items-center px-[30px] gap-[100px]">
      <div className="z-50">
        <Link href="/auth/dashboard" className="font-[600] text-[20px]">
          VOUY
        </Link>
      </div>
      <div className="hidden lg:flex gap-[25px]">
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
      <div className="hidden lg:flex w-full mb-[15px] justify-end">
        <SignOutButton />
      </div>
      <div
        className="w-full justify-end flex z-50 lg:hidden mr-[10px]"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {(isMenuOpen && <span>Close</span>) || <span>Menu</span>}
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow- bg-white z-0 top-0 left-0 h-screen w-screen fixed flex flex-col "
          >
            {/* <div className="flex w-full h-[100px] px-[30px] items-center justify-between">
              <div>
                <Link href="/auth/dashboard" className="font-[600] text-[20px]">
                  VOUY
                </Link>
              </div>
              <p
                className="mr-[10px]"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Close
              </p>
            </div> */}
            <div className="w-full flex items-center h-full">
              <motion.div
                variants={navLinksVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full  flex flex-col pl-[40px] text-[20px] "
              >
                {links.map((link, index) => {
                  return (
                    <motion.span key={index} variants={linkItemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                        style={{
                          color:
                            link.href === getPathUntilSecondSlash(path)
                              ? "#000000"
                              : "#979797",
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
