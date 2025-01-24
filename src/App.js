import React, { useState } from 'react';
import './App.css';

function App() {
  const [textContent, setTextContent] = useState('');

  const fetchText = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/read-text');
      const data = await response.json();
      setTextContent(data.content); // Gelen "content" verisini state'e kaydet
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }
  };

  return (
    <div className="App">
      <h1>Metin Dosyasının İçeriğini Okuma</h1>
      <button onClick={fetchText}>Metni Getir</button>
      <p>{textContent}</p> {/* Metin içerik burada gösterilecek */}
    </div>
  );
}

export default App;
