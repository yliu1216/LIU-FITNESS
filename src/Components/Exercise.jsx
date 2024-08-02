import React, { useContext, useState } from "react";
import { ExerciseContext } from "./ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import ReactPaginate from "react-paginate";
import "../index.css"
import { ExerciseOptions, fetchData } from "../utils/fetchData";

const Exercise = ({})=>{
    const { selectedExerciseData } = useContext(ExerciseContext);
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 10;
    const offset = currentPage * cardsPerPage;
    const pageCount = Math.ceil(selectedExerciseData.length / cardsPerPage);
  
    
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const currentCards = selectedExerciseData.slice(offset, offset + cardsPerPage);
    return (
      <div className="text-primary">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6 pb-5">
        {currentCards.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      <ReactPaginate
          className="flex justify-center gap-3 font-bold"
          previousLabel={ <img src={require("../assets/icons/left-arrow.png")} alt="larrow" />}
          nextLabel={<img src={require("../assets/icons/right-arrow.png")} alt="rarrow" />}
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

export default Exercise;