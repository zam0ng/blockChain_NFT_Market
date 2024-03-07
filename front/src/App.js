import './App.css';
import Main from './components/main/Main';
import Mypage from './components/mypage/Mypage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { createContext,useEffect, useState } from 'react';
import useWeb3 from './hooks/web3.hook';
import abi from './abi/Mynft.json';

export const Global = createContext();
function App() {

  const {user,web3} = useWeb3();
  const [contract ,setContract] = useState();
  console.log("user-------",user)
  useEffect(()=>{
    if(web3 !==null){
        if(contract) return;
        const mynft = new web3.eth.Contract(abi,process.env.REACT_APP_CA,{data:""});
        setContract(mynft);
    }
  },[web3])

  const obj = {user,web3};

  return (
    <Global.Provider value={obj}>
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element ={<Main/>}/>
        <Route path='/mypage' element ={<Mypage/>}/>
      </Routes>
    </div>
    </Router>
    </Global.Provider>
  );
}

export default App;
