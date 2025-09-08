"use client";
import React from "react";

type Props = { title: string; description: string; link?: string };

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium underline">
          İncele →
        </a>
      )}
    </div>
  );
}
