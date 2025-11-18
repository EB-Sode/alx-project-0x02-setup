import React from "react";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">About Page</h1>

      {/* Small button - rounded-sm */}
      <Button 
        label="Small Button" 
        size="small" 
        shape="rounded-sm" 
      />

      {/* Medium button - rounded-md */}
      <Button 
        label="Medium Button" 
        size="medium" 
        shape="rounded-md" 
      />

      {/* Large button - rounded-full */}
      <Button 
        label="Large Button" 
        size="large" 
        shape="rounded-full" 
      />
    </div>
  );
}
