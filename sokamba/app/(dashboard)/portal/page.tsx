"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface DataNode {
  name: string;
  children?: DataNode[];
  value?: number;
}

interface HierarchyNode extends d3.HierarchyNode<DataNode> {
  value: number;
}

export default function PortalPage() {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>

      <Textarea
        placeholder="Enter your text here"
        className="w-full mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
      </div>

    </div>
  );
}
