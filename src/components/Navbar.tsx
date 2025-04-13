"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconAddressBook, IconBlockquote, IconBrandCraft, IconBrandGithub, IconFileCv, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconBrandCraft className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blogs",
      link: "#blogs",
      icon: <IconBlockquote className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Resume",
      link: "#resume",
      icon: <IconFileCv className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconAddressBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative w-[80%]">
      <FloatingNav navItems={navItems} />
    </div>
  );
}