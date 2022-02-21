import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import ViewCard from "./component/ViewCard";
import Home from "./component/Home";
import AboutUs from './component/AboutUs';

// const Home= ()=>(
//   <div className='d-flex flex-column'>
//     <h1 className='text-center'>now in home</h1>
//     <ul>
//       <li><h6><Link to="./ViewCard">to ViewCard</Link></h6></li>
//       <li><h6><Link to="./AboutUs">to AboutUs</Link></h6></li>
//     </ul>
//   </div>
// )
// const ViewCard= ()=>(
//   <div>
//   <h1 className='text-center'>now in ViewCard</h1>
//   <ul>
//     <li><h6><Link to="./AboutUs">to About us</Link></h6></li>
//     <li><h6><Link to="./home"> home</Link></h6></li>
//   </ul>
//   </div>
//   )
// const AboutUs= ()=>(
//   <div>
//     <h1 className='text-center'>now in About us</h1>
//   <ul>
//     <li><h6><Link to="./home"> home</Link></h6></li>
//     <li><h6><Link to="./ViewCard">to ViewCard</Link></h6></li>
//   </ul>
//   </div>
// )

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
      {/* <Route path="/Home" element={<Home />} /> */}
      <Route path="AboutUs/" element={<AboutUs />} />
      <Route path="ViewCard/" element={<ViewCard />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
