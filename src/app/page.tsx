"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/hello");
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
