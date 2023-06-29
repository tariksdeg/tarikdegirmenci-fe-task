// import cookie from "js-cookie";
import React from "react";
import { cookies } from "next/headers";
const deneme = () => {
  const cookieStore = cookies();
  return <div>deneme</div>;
};

export default deneme;
