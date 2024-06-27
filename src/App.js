// function App() {
//   return (
//     <div className="App">
//       <header className="bg-blue-500 p-6  text-center text-red-600">
//         <h1 className="text-4xl">Welcome to Tailwind CSS in React</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import {Link,Route,Routes,HashRouter} from "react-router-dom";
import Home from './layout/home';
import Mainlayout from './layout/mainlayout';
import Customer from './component/customer/customer';

// const Stand = ()=>{
//   return(
//     <Stand/>
//   )
// }

// const Sit = ()=>{
//   return(
//     <Sit/>
//   )
// }



const App = (props)=> {
    
  return (
    <HashRouter>
            <Routes>
              <Route  path="/" element={ <Mainlayout/>}>
                <Route index element={<Home/>}/>
                <Route path='/customer' element={<Customer />}/>
              </Route>
            </Routes>     
    </HashRouter>    
  );
}

export default App;