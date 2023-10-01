import React from "react";

export default function ErrorPage() {
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center">
      <h1>Oops something went wrong!</h1>
      <button className="border border-black outline-none px-5 py-3 rounded-lg">Go back</button>
    </div>
  );
}
