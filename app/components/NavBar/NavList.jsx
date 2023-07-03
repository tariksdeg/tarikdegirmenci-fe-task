"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavList = () => {
  const pathname = usePathname();
  const list = [
    {
      id: 1,
      name: "Home",
      img: "/home.svg",
      link: "/",
      selected: pathname === "/" ? true : false,
    },
    {
      id: 2,
      name: "Course",
      img: "/course.svg",
      link: "",
      selected: pathname === "/course" ? true : false,
    },
    {
      id: 3,
      name: "Students",
      img: "/students.svg",
      link: "/students",
      selected: pathname === "/students" ? true : false,
    },
    {
      id: 4,
      name: "Payment",
      img: "/payment.svg",
      link: "",
      selected: pathname === "/payment" ? true : false,
    },
    {
      id: 5,
      name: "Report",
      img: "/report.svg",
      link: "",
      selected: pathname === "/report" ? true : false,
    },
    {
      id: 6,
      name: "Settings",
      img: "/settings.svg",
      link: "",
      selected: pathname === "/settings" ? true : false,
    },
  ];
  return (
    <div className="lg:mt-0 mt-2  lg:ml-0 ml-5">
      {list.map((item) => {
        return (
          <Link href={item.link} key={item.id}>
            <div
              className={
                item.selected
                  ? "bg-[#FEAF00] flex py-1 px-5 lg:py-2 lg:px-10 rounded-[4px] lg:mb-5 my-3 lg:my-0 "
                  : "bg-[#F2EAE1] hover:bg-[#ebdbc8] flex py-1 px-5 lg:py-2 lg:px-10 rounded-[4px] lg:mb-5 my-3 lg:my-0"
              }
            >
              <img className="w-5 h-5" src={item.img} alt="" />
              <p className="lg:ml-4 ml-2 text-sm font-medium flex items-center justify-center">
                {item.name}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavList;
