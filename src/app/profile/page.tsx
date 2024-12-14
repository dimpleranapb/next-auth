"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data._id);
  };
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
  <div>
    <h1>Profile Page</h1>
    <hr />
    <h2>{data==="nothing"?"Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
<hr />

<button onClick={logout} className="p-2 text-white">
  Logout
</button>
<button onClick={getUserDetails} className="p-2 text-white">
  Get User Details
</button>
  </div>
  )
}
