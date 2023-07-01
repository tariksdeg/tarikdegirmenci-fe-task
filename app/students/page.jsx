"use client";
import { Image, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Students = () => {
  const [users, setUsers] = useState();
  const toast = useToast();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const updateUser = (item) => {
    Cookies.set("firstName", item.firstName);
    Cookies.set("lastName", item.lastName);
    Cookies.set("email", item.email);
    Cookies.set("password", item.password);
    Cookies.set("phone", item.phone);
    Cookies.set("domain", item.domain);
    router.push(`/users/${item.id}`);
  };

  const getUsers = async () => {
    setLoading(true);
    try {
      let result = await axios.get("https://dummyjson.com/users");
      console.log(`xxxres ==>`, result.data.users);
      setUsers(result.data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      let result = await axios.delete(`https://dummyjson.com/users/${id}`);
      toast({
        title: `User was deleted, ${result.data.deletedOn}`,
        position: "top",
        status: "warning",
        isClosable: true,
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="bg-[#F8F8F8] min-h-screen pl-14 pr-6 ">
      <div className="flex items-center justify-between py-5 border-b border-[#E5E5E5]">
        <p className="font-bold text-2xl">Students List</p>
        <div className="flex items-center justify-center">
          <div className="relative mr-5">
            <input
              className="border border-[#E5E5E5] px-4 py-2 rounded-lg outline-none placeholder:text-sm placeholder:font-normal text-sm font-semibold"
              type="text"
              placeholder="Search...."
              name=""
              id=""
            />
            <img
              className="absolute right-3 top-3"
              src="/search.svg"
              alt="search"
            />
          </div>
          <div
            onClick={() => router.push("/users/add")}
            className="bg-[#FEAF00] text-white text-sm font-medium flex items-center justify-center rounded-[4px] py-3 px-8 cursor-pointer"
          >
            ADD NEW STUDENT
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-5 px-3">
        <p className="w-20"></p>
        <p className="w-[12%] text-xs font-semibold text-[#ACACAC] ">Name</p>
        <p className="w-[17%] text-xs font-semibold text-[#ACACAC] ">Email</p>
        <p className="w-[12%] text-xs font-semibold text-[#ACACAC] ">Phone</p>
        <p className="w-[12%] text-xs font-semibold text-[#ACACAC] ">Website</p>
        <p className="w-[12%] text-xs font-semibold text-[#ACACAC] ">
          Company Name
        </p>
        <p className="w-[12%]"></p>
      </div>
      {isLoading && (
        <div className="w-full flex items-center h-[55vh] justify-center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      )}
      {!isLoading &&
        users?.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex text-sm items-center justify-between bg-white p-3 rounded-lg mt-2"
            >
              <div className="w-20 h-16 rounded-lg object-contain overflow-hidden">
                <Image
                  className="w-full h-full object-fill"
                  src={item?.image}
                  alt=""
                />
              </div>
              <p className="w-[12%]">
                {item?.firstName} {item?.lastName}
              </p>
              <p className="w-[17%]">{item?.email}</p>
              <p className="w-[12%]">{item?.phone}</p>
              <p className="w-[12%]">{item?.domain}</p>
              <p className="w-[12%]">{item?.company.name}</p>
              <div className="w-[12%] flex justify-end">
                <img
                  onClick={() => updateUser(item)}
                  className="cursor-pointer "
                  src="/pen.svg"
                  alt="pen"
                />
                <img
                  onClick={() => deleteUser(item?.id)}
                  className="cursor-pointer ml-10"
                  src="/trash.svg"
                  alt="trash"
                />
              </div>
            </div>
          );
        })}
      {!isLoading && (
        <div className="flex mt-5 items-center pb-10">
          <div className="w-[72%]"></div>
          <div className="flex">
            <p className="text-sm text-[#9FA2B4]">Rows per page:</p>
            <select
              name="quantity"
              id="quantity"
              className=" rounded-lg px-1 text-sm text-[#4B506D]  bg-[#F8F8F8] "
              // value={item.amount}
              defaultValue="6"
            >
              {values.map((value) => {
                return (
                  <option
                    className="text-sm text-[#4B506D]   "
                    key={value}
                    value={value}
                  >
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mx-5 text-[#9FA2B4] text-sm ">1-5 of 1240</div>
          <div className="flex">
            <img className="cursor-pointer" src="/left.svg" alt="left" />
            <img className="cursor-pointer" src="/right.svg" alt="right" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
