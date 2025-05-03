import { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { useParams } from "react-router";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  return (
    <>
      <Navbar />
    </>
  );
}
