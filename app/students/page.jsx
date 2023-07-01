"use client";
import { Image, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Students = () => {
  const params = useSearchParams();
  // const params = useParams();
  const [users, setUsers] = useState();
  const toast = useToast();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(6);
  const [searchQuery, setsearchQuery] = useState("");
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const pages = Math.ceil(users?.length / postsPerPage);

  const paramsSearch = params.get("search");
  const paramsSize = params.get("size");
  const paramsPage = params.get("page");

  const rightPagination = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
      router.replace(
        `/students?page=${
          currentPage + 1
        }&size=${paramsSize}&search=${paramsSearch}`
      );
    } else setCurrentPage(currentPage);
  };
  const leftPagination = () => {
    if (currentPage === 1) {
      setCurrentPage(currentPage);
    } else if (currentPage <= pages) {
      router.replace(
        `/students?page=${
          currentPage - 1
        }&size=${paramsSize}&search=${paramsSearch}`
      );
      setCurrentPage(currentPage - 1);
    }
  };
  if (currentPage < 1) {
    setCurrentPage(1);
  }
  const updateUser = (item) => {
    Cookies.set("firstName", item.firstName);
    Cookies.set("lastName", item.lastName);
    Cookies.set("email", item.email);
    Cookies.set("password", item.password);
    Cookies.set("phone", item.phone);
    Cookies.set("domain", item.domain);
    router.push(`/student/${item.id}`);
  };

  const searchFunc = async (e) => {
    setsearchQuery(e.target.value);
    setLoading(true);
    try {
      let result = await axios.get(
        `https://dummyjson.com/users/search?q=${e.target.value}`
      );
      setUsers(result.data.users);
      setLoading(false);
      router.replace(
        `/students?page=${currentPage}&size=${
          result.data.users.length || "0"
        }&search=${e.target.value}`
      );
      if (
        currentPage &&
        currentPage > Math.ceil(result.data.users.length / postsPerPage)
      ) {
        router.replace(
          `/students?page=${Math.ceil(
            result.data.users.length / postsPerPage
          )}&size=${result.data.users.length || "0"}&search=${e.target.value}`
        );
        setCurrentPage(Math.ceil(result.data.users.length / postsPerPage));
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getUsers = async () => {
    setLoading(true);
    try {
      let result = await axios.get("https://dummyjson.com/users");
      setUsers(result.data.users);
      setLoading(false);
      router.replace(
        `/students?page=${currentPage}&size=${result.data.users.length}&search=${searchQuery}`
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      let result = await axios.delete(`https://dummyjson.com/users/${id}`);
      toast({
        title: `${result.data.firstName} ${result.data.lastName} was deleted, ${result.data.deletedOn}`,
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
              onChange={searchFunc}
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
            onClick={() => router.push("/student/add")}
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
        users?.length > 0 &&
        users?.slice(firstPostIndex, lastPostIndex).map((item) => {
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
      {!isLoading && users?.length > 0 && (
        <div className="flex justify-between mt-5 items-center pb-10">
          <div className="w-[65%]"></div>
          <div className="flex">
            <p className="text-sm text-[#9FA2B4]">Rows per page:</p>
            <select
              name="quantity"
              id="quantity"
              className=" rounded-lg px-1 text-sm text-[#4B506D]  bg-[#F8F8F8] "
              defaultValue={postsPerPage}
              onChange={(e) => {
                if (e.target.value * currentPage > users?.length) {
                  setCurrentPage(1);
                  setpostsPerPage(e.target.value);
                  router.replace(
                    `/students?page=${1}&size=${paramsSize}&search=${paramsSearch}`
                  );
                } else setpostsPerPage(e.target.value);
              }}
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
          <div className="mx-5 text-[#9FA2B4] text-sm ">
            {firstPostIndex + 1}-
            {lastPostIndex <= users?.length ? lastPostIndex : users?.length} of{" "}
            {users?.length}
          </div>
          <div className="flex">
            <img
              onClick={leftPagination}
              className="cursor-pointer"
              src="/left.svg"
              alt="left"
            />
            <img
              onClick={rightPagination}
              className="cursor-pointer mx-2"
              src="/right.svg"
              alt="right"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
