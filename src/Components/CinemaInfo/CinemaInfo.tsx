import React from "react";
import { useParams } from "react-router-dom";

export default function CinemaInfo() {
  const { id } = useParams();
  console.log(id);
  return <div>CinemaInfo</div>;
}
