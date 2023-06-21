import React, { useState } from 'react';
import WatermarkForm from './components/WatermarkForm';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleWatermarkCreation = (watermarkText) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = URL.createObjectURL(selectedFile);
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      context.drawImage(image, 0, 0);

      context.font = '120px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = 'rgba(255, 255, 255, 0.5)';
      context.fillText(watermarkText, canvas.width / 2, canvas.height / 2);

      const link = document.createElement('a');
      link.download = 'watermarked_image.png';
      link.href = canvas.toDataURL();
      link.click();
    };
  };

  return (
    <div className="container mx-auto py-8 text-center"  style={{
        backgroundImage: "url('bgform.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <h1 className="text-3xl font-semibold text-center text-black pt-10 mb-5">Aplikasi Watermark</h1>
      <WatermarkForm
        onFileChange={handleFileChange}
        onSubmit={handleWatermarkCreation}
      />
    </div>
  );
}

export default App;
