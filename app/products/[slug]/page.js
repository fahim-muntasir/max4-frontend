"use client";
import React from "react";
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { slug } = useParams();

  return <div>{slug}</div>;
}
