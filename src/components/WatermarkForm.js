import React, { useRef } from 'react';

const WatermarkForm = ({ onWatermarkTextChange, onFileChange, onSubmit }) => {
  const watermarkTextRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const watermarkText = watermarkTextRef.current.value;
    onSubmit(watermarkText);
  };

  return (
<div className="container mx-auto mt-5">
<form onSubmit={handleFormSubmit}>
  <div className="mb-4">
    <input
      type="text"
      id="watermarkText"
      placeholder="Masukkan Watermark" className="input input-bordered input-accent w-full max-w-xs"
      ref={watermarkTextRef}
      onChange={onWatermarkTextChange}
    />
  </div>
  <div className="mb-4">
    <h1 htmlFor="file" className="block text-lg font-medium mb-1">
      Masukkan File:
    </h1>
    <br/>
    <input
      type="file"
      id="file"
      className="file-input file-input-bordered mb-5 file-input-warning w-full max-w-xs"
      accept="image/*"
      onChange={onFileChange}
    />
  </div>
  <button 
    type="submit"
    className="btn btn-outline btn-success"
  >
    Add Watermark
  </button>
</form>
</div>

  );
};

export default WatermarkForm;
