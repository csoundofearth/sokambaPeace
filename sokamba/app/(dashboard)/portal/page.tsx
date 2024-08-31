"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";

export default function PortalPage() {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <p>
        Here is how to use the platform:
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Button>Offerings</Button>
        <Button>Practices</Button>
        <Button>Events</Button>
        <Button>Providers</Button>
      </div>

    </div>
  );
}
