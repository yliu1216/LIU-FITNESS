import React from 'react'

export const ExercisesVideos = ({exerciseVideo, name}) => {
    if(!exerciseVideo) return 'loading.....';
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center mt-4 p-4 gap-5">
        <span className="w-6/12 h-10 border border-0 rounded-lg outlin-inherient">Watch <p>{name}</p> exercise videos </span>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-5 text-primary">
            {
                exerciseVideo?.slice(0,3).map((item, index)=>(
                <a
                    key={index}
                    className="font-semibold gap-2"
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                </a>
                ))
            }
        </div>
    </div>
  )
}
