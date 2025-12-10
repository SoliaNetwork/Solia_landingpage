
import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1>Download Center</h1>
      <p>Click the button below to download your file.</p>
      <a href="/sample-file.txt" download className="btn">Download File</a>
    </div>
  );
}
