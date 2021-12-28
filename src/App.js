import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" abouText="About Us"/>
       {/* <Navbar /> */}
       <div className="container my-3" >
        <TextForm  heading="Enter the text to Analyze below"/>
       </div>
      
    </>
  );
}

export default App;
