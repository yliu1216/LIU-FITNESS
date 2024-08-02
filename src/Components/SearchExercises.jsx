import { React, useState, useEffect } from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import axios from "axios";
import ReactPaginate from "react-paginate";
import ExerciseCard from "./ExerciseCard.jsx";

import { ExerciseOptions, bodypartOptions, fetchData } from "../utils/fetchData.jsx";

export default function SearchExercise() {
  const [search, setSearch] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 9;

  useEffect(() => {
    const ExerciseData = async () => {
      try {
        const data = await fetchData(bodypartOptions);
       
       console.log(data);
       setBodyPart(["all", ...data]);
      } catch (err) {
        console.log(err);
      }
    };
    ExerciseData();
  }, []);


  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const options = { ...ExerciseOptions, params: { ...ExerciseOptions.params, bodyPart: selectedBodyPart } };
        const data = await fetchData(options);
        setExercise(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (selectedBodyPart !== 'all') {
      fetchExerciseData();
    }
  }, [selectedBodyPart]);

  function isMouseOver() {
    setMouseOver(true);
  }

  function isMouseOut() {
    setMouseOver(false);
  }

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  async function handleSearch() {
    if (typeof search === "string" && search !== "") {
      try {
        const exerciseData = await fetchData(ExerciseOptions);

        console.log(exerciseData);
        const searchedExercise = exerciseData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search.toLowerCase()) ||
            exercise.target.toLowerCase().includes(search.toLowerCase()) ||
            exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
            exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
        );
        setSearch("");
        setExercise(searchedExercise);
        setSelectedBodyPart();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Exercise not found. Please try again.");
    }
  }


  const filteredExercise = search !== "" || selectedBodyPart !== "all" ? exercise : [];

  const pageCount = Math.ceil(filteredExercise.length / cardsPerPage);
  const offset = currentPage * cardsPerPage;
  const currentCards = filteredExercise.slice(offset, offset + cardsPerPage);

  return (
    <div className="pt-12 pb-5">
      <h1 className="flex justify-center items-center text-3xl pt-3 text-black font-semibold">
        Awesome Exercises You Should Know
      </h1>
      <div className="pt-10 flex justify-center items-center gap-1">
        <input
          className="w-6/12 h-10 border border-0 rounded-lg outlin-inherient"
          placeholder="Please Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="w-20 h-10 bg-primary text-white"
          style={{ backgroundColor: mouseOver ? "#000" : "#ef4444" }}
          onClick={handleSearch}
          onMouseOver={isMouseOver}
          onMouseOut={isMouseOut}
        >
          Search
        </button>
      </div>

      <div className="pt-10 relative w-full pl-5">
        <HorizontalScrollBar
          data={bodyPart}
          onClick={setSelectedBodyPart}
          selected={selectedBodyPart}
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-5 text-primary">
        {currentCards.map((value) => (
          <ExerciseCard key={value.id} exercise={value} />
        ))}
      </div>
      <ReactPaginate
        className="flex justify-center gap-3"
        previousLabel={""}
        nextLabel={""}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}