"use client";
import { Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
const UserAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const registerUserFunction = async (values) => {
    setIsLoading(true);
    try {
      const result = await axios.post(
        "https://dummyjson.com/users/add",
        values
      );
      toast({
        title: "Registration Successful!",
        position: "top",
        status: "success",
        isClosable: true,
        duration: 9000,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Mandatory Field"),
    firstName: Yup.string().required("Mandatory Field"),
    lastName: Yup.string().required("Mandatory Field"),
    password: Yup.string()
      .required("Mandatory Field")
      .min(8, "it must be min 8 character "),
    phone: Yup.string().required("Mandatory Field"),
    age: Yup.string().required("Mandatory Field"),
  });

  const signupFormik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      lastName: "",
      password: "",
      phone: "",
      age: "",
    },
    validationSchema,
    onSubmit: (values) => {
      registerUserFunction(values);
    },
  });

  if (isLoading) {
    return (
      <div className="bg-[#F8F8F8] flex h-screen w-full justify-center items-center text-white pl-14 pr-6 pt-10">
        <Spinner size="xl" thickness=".5rem" />
      </div>
    );
  }
  return (
    <div className="bg-[#F8F8F8] min-h-screen pl-14 pr-6 pt-10">
      <div className=" flex flex-col justify-between  container rounded-lg bg-white my-16 w-2/4  py-7 px-5">
        <div className="flex items-center justify-center">
          <div className="text-3xl font-bold border-l-[6px] border-[#F8D442] px-2 leading-10">
            ADD NEW USER
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="text-[22px] font-semibold leading-6">SAVE</div>
          <div className="text-sm text-[#6C6C6C] mt-2">
            Enter your information
          </div>
        </div>
        <div className="mt-5">
          <form onSubmit={signupFormik.handleSubmit} className="flex flex-col">
            <div className="flex">
              <label
                htmlFor="firstName"
                className="text-[#6C6C6C] text-sm font-medium mb-1 "
              >
                First Name
              </label>{" "}
              {signupFormik.errors.firstName && (
                <p className="text-sm ml-1 text-red-600">
                  {signupFormik.errors.firstName}
                </p>
              )}
            </div>
            <input
              type="text"
              className="border border-[#E5E5E5] rounded-md mb-5 text-xs p-3 "
              placeholder="Enter your first name"
              name="firstName"
              id="firstName"
              onChange={signupFormik.handleChange}
              value={signupFormik.values.firstName}
            />
            <div className="flex">
              <label
                htmlFor="lastName"
                className="text-[#6C6C6C] text-sm font-medium mb-1 "
              >
                Last Name
              </label>{" "}
              {signupFormik.errors.lastName && (
                <p className="text-sm ml-1 text-red-600">
                  {signupFormik.errors.lastName}
                </p>
              )}
            </div>
            <input
              type="text"
              className="border border-[#E5E5E5] rounded-md mb-5 text-xs p-3"
              placeholder="Enter your last name"
              name="lastName"
              id="lastName"
              onChange={signupFormik.handleChange}
              value={signupFormik.values.lastName}
            />
            <div className="flex">
              <label
                htmlFor="email"
                className="text-[#6C6C6C] text-sm font-medium mb-1 "
              >
                Email
              </label>{" "}
              {signupFormik.errors.email && (
                <p className="text-sm ml-1 text-red-600">
                  {signupFormik.errors.email}
                </p>
              )}
            </div>
            <input
              type="text"
              className="border border-[#E5E5E5] rounded-md mb-5 text-xs p-3"
              placeholder="Enter your  email"
              name="email"
              id="email"
              onChange={signupFormik.handleChange}
              value={signupFormik.values.email}
            />
            <div className="flex">
              <label
                htmlFor="password"
                className="text-[#6C6C6C] text-sm font-medium mb-1 "
              >
                Password
              </label>{" "}
              {signupFormik.errors.password && (
                <p className="text-sm ml-1 text-red-600">
                  {signupFormik.errors.password}
                </p>
              )}
            </div>
            <input
              type="password"
              className="border border-[#E5E5E5] rounded-md mb-5 text-xs p-3"
              placeholder="Enter your  password"
              name="password"
              id="password"
              onChange={signupFormik.handleChange}
              value={signupFormik.values.password}
            />
            <div className="flex">
              <label
                htmlFor="phone"
                className="text-[#6C6C6C] text-sm font-medium mb-1 "
              >
                Phone
              </label>{" "}
              {signupFormik.errors.phone && (
                <p className="text-sm ml-1 text-red-600">
                  {signupFormik.errors.phone}
                </p>
              )}
            </div>
            <input
              type="text"
              className="border border-[#E5E5E5] rounded-md mb-5 text-xs p-3"
              placeholder="Enter your phone"
              name="phone"
              id="phone"
              onChange={signupFormik.handleChange}
              value={signupFormik.values.phone}
            />{" "}
            <div className="flex">
              <label
                htmlFor="email"
                className="text-[#6C6C6C] text-sm font-medium mb-1 "
              >
                Age
              </label>{" "}
              {signupFormik.errors.age && (
                <p className="text-sm ml-1 text-red-600">
                  {signupFormik.errors.age}
                </p>
              )}
            </div>
            <input
              type="number"
              className="border border-[#E5E5E5] rounded-md mb-5 text-xs p-3"
              placeholder="Enter your age"
              name="age"
              id="age"
              onChange={signupFormik.handleChange}
              value={signupFormik.values.age}
            />{" "}
            <input
              type="submit"
              value="ADD USER"
              className="w-full bg-[#FEAF00] text-white py-3 rounded-md hover:bg-[#e79f02] cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
