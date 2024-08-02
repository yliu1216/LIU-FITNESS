import React from 'react';

export const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="h-74 flex">
             <img src={gifUrl} alt={name} loading="lazy" className="w-full object-cover" />
        </div>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{name}</ h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Details</h2>
            {
                instructions.map((item, index)=>(
                    <p text-sm text-gray-600 mb-2>{item}</p>
                ))
            }
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold text-gray-800">Target:</span> {target}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold text-gray-800">Equipment:</span> {equipment}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-gray-800">Body Part:</span> {bodyPart}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};