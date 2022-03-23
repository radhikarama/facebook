import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Data from './Component/BE/Data'
import Leftfb from './Component/leftpartfacebook/Leftfb';
import Middlefb from './Component/Middlepartfacebook/Middlefb';
import Right from './Component/Rightfb/Right';

function App() {
  const {data,data1,data2,data3} = Data;
  return (
   
    <div>
     
     <Header/>
     <div className='Mpart'>
     <Leftfb data={data}/>
   <Middlefb data1={data1} data2={data2} data3={data3}/>
   <Right data={data}/>
     </div>
   
    </div>
  );
}

export default App;
