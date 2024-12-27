import React, { useRef, useState, useEffect } from "react";
import "./ScribblePad.css";

const ScribblePad = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [history, setHistory] = useState([]); // To store saved drawings

  // Load history from local storage
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("drawingsHistory")) || [];
    setHistory(savedHistory);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.75; // 75% of the screen for canvas
    canvas.height = window.innerHeight;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctxRef.current = ctx;
  }, [color, brushSize]);

  const startDrawing = (e) => {
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
  };

  const draw = (e) => {
    if (!drawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
    ctxRef.current.closePath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    const img = canvas.toDataURL();

    // Save drawing to history and local storage
    const updatedHistory = [...history, img];
    setHistory(updatedHistory);
    localStorage.setItem("drawingsHistory", JSON.stringify(updatedHistory));
  };

  const loadImage = (imgSrc) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear current drawing
      ctx.drawImage(img, 0, 0); // Draw the saved image
    };
    img.src = imgSrc;
  };

  const deleteImage = (index) => {
    // Remove image from history
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    localStorage.setItem("drawingsHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="scribble-container">
      {/* Tools Sidebar */}
      <div className="tools-sidebar">
        <h2>Tools</h2>

        <div className="tool">
          <label>Brush Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="tool">
          <label>Brush Size:</label>
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(e.target.value)}
          />
        </div>

        <button className="tool-button" onClick={clearCanvas}>
          Clear Board
        </button>
        <button className="tool-button" onClick={saveImage}>
          Save Drawing
        </button>

        {/* Saved Drawings (History) */}
        <div className="history">
          <h3>History</h3>
          <div className="history-thumbnails">
            {history.map((imgSrc, index) => (
              <div key={index} className="history-item">
                <img
                  src={imgSrc}
                  alt={`drawing-${index}`}
                  className="history-thumbnail"
                  onClick={() => loadImage(imgSrc)}
                />
                <button
                  className="delete-button"
                  onClick={() => deleteImage(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drawing Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="drawing-canvas"
      ></canvas>
    </div>
  );
};

export default ScribblePad;