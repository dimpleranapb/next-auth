'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import Link from "next/link";
export default function page() {
//   const router = useRouter;
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    setError(false)
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");

    // Using next js
    // const {query} = router;
    // const urlTokenTwo = query.token
  }, []);

  useEffect(() => {
    setError(false)
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);
  return(
    
<div>
    <h1>Verify Email</h1>
    <h2>
        {token? `${token}`: "no Token"}
    </h2>
    {verified && (
        <div>
            <h2>Verified</h2>
            <Link href="/login">Login</Link>
        </div>
    )}
     {error && (
        <div>
            <h2>Error</h2>
+        </div>
    )}
</div>

  )
}
