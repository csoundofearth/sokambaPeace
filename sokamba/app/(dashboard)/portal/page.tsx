"use client";

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useRef } from "react"
import * as d3 from "d3"
import { useEcosystemCategories } from "@/app/hooks/ecosystem-categories/useGetEcosystemCategories"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function PortalPage() {
  const chartRef = useRef(null);
  const { data: ecosystemCategories, isLoading, error } = useEcosystemCategories();

  useEffect(() => {
    // ... (keep the existing D3 chart code here)
  }, []);

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

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Ecosystem Categories</h2>
        {isLoading ? (
          <p>Loading ecosystem categories...</p>
        ) : error ? (
          <p>Error loading ecosystem categories: {error.message}</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ecosystemCategories?.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.id}</TableCell>
                  <TableCell>{category.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <div ref={chartRef} className="w-full h-[928px]"></div>
    </div>
  )
}
