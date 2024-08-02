import React from "react";
import axios from "axios";

export const ExerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    params: {
      limit: '50',
      offset: '0'
    },
    headers: {
      'x-rapidapi-key': '723bd1f773mshc16a49c7092fc29p190e1bjsn24d2a953c89f',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };
  
 export const bodypartOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'x-rapidapi-key': '723bd1f773mshc16a49c7092fc29p190e1bjsn24d2a953c89f',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };


 
  export const fetchData = async(options) => {
    try{
      const response = await axios.request(options);
      console.log(response);
      return response.data;
    }catch(err){
      console.error(err);
    }
  }