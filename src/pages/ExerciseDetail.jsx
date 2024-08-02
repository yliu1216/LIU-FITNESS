import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import { Details } from "../Components/Details"; // Ensure the correct path and named import
import { SimilarExercises } from "../Components/SimilarExercises"; // Ensure the correct path and named import
import { ExercisesVideos } from "../Components/ExercisesVideos"; // Ensure the correct path and named import

export default function ExerciseDetail() {
  const { id } = useParams();
  const [exerciseDetail, setExercise] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);

  const workoutOptions = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    headers: {
      'x-rapidapi-key': '723bd1f773mshc16a49c7092fc29p190e1bjsn24d2a953c89f',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  const videoRelated = {
      method: 'GET',
      url:  `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`,
      params: {
        query: 'rick roll',
        next: 'EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D',
        hl: 'en',
        gl: 'US',
        upload_date: 't',
        type: 'v',
        duration: 's',
        features: 'li;hd',
        sort: 'v'
      },
      headers: {
        'x-rapidapi-key': '723bd1f773mshc16a49c7092fc29p190e1bjsn24d2a953c89f',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
      }
    }

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchExerciseData = async () => {
      try {
        const exerciseDetailData = await fetchData(workoutOptions);
        setExercise(exerciseDetailData);

        const exerciseVideoData = await fetchData(videoRelated);
        setExerciseVideo(exerciseVideoData);
      } catch (error) {
        console.error("Error fetching exercise details:", error);
      }
    };
    fetchExerciseData();
  }, [id]);

  if (Object.keys(exerciseDetail).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4 bg-white mx-8 px-8 pt-8">
      <Details exerciseDetail={exerciseDetail} />
      <ExercisesVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
    </div>
  );
}