import React, { useState } from 'react';
function App() {
  const [image, setimage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUJpO2PMc1tcPT4c7ZDslMOo-zpXV29QkNQ&s'); 
  const [word,setword] = useState("cat");

  const toggleImage = () => {
    
    if (image === 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUJpO2PMc1tcPT4c7ZDslMOo-zpXV29QkNQ&s') {
      setimage('https://imgcp.aacdn.jp/img-a/600/auto/global-aaj-front/article/2017/10/59e042b5de07d_59e041ee14c8b_842368218.jpg');
      setword ("dog");
      
    } else {
      setimage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUJpO2PMc1tcPT4c7ZDslMOo-zpXV29QkNQ&s');
      setword ("cat");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Display the current image */}
      <img src={image} alt="Toggle" style={{ width: '50%', maxWidth: '500px' }} />
       <p>{word}</p>
      {/* Button to toggle the image */}
      <div>
        <button onClick={toggleImage} style={{ marginTop: '20px' }}>Toggle Image</button>
      </div>
    </div>
  );
}

export default App;