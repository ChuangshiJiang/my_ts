import React from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const handlePrint = () => {
    html2canvas(document.body, {
      scale: window.devicePixelRatio,
      allowTaint: true
    }).then((canvas) => {
      // document.body.appendChild(canvas.toDataURL('image/png',1.0));
      // let newImg = new Image();
      canvas.toDataURL('image/png');
      // newImg.crossOrigin = 'Anonymous';
      // newImg.src = url + "?v=" + new Date().getTime();
      document.body.appendChild(canvas);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3027637556,1127104872&fm=55&app=54&f=JPEG?w=1140&h=640" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p onClick={handlePrint}>Print</p>
      </header>
    </div>
  );
}

export default App;
