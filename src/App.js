import React, { useState } from 'react';
function App() {
  const [image, setimage] = useState('https://imgcp.aacdn.jp/img-a/600/auto/global-aaj-front/article/2017/10/59e042b5de07d_59e041ee14c8b_842368218.jpg');  // Initialize state with the word 'Hello'

  const toggleWord = () => {
    // Use an if statement to toggle between the words 'Hello' and 'Goodbye'
    if (image === 'https://imgcp.aacdn.jp/img-a/600/auto/global-aaj-front/article/2017/10/59e042b5de07d_59e041ee14c8b_842368218.jpg') {
      setWord('https://imgcp.aacdn.jp/img-a/600/auto/global-aaj-front/article/2017/10/59e042b5de07d_59e041ee14c8b_842368218.jpg');
    } else {
      setWord('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUJpO2PMc1tcPT4c7ZDslMOo-zpXV29QkNQ&s');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Display the current image */}
      <img src={image} alt="Toggle" style={{ width: '50%', maxWidth: '500px' }} />
      {/* Button to toggle the image */}
      <div>
        <button onClick={toggleImage} style={{ marginTop: '20px' }}>Toggle Image</button>
      </div>
    </div>
  );
}

export default App;