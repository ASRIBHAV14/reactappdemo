
import './App.css';
import Footer from './component/Footer';
import Greet from './component/Greet';
import Header from './component/Header';
import Greetme from './component/Greetme';
import Lifecycles from './component/Lifecycles';
import Demo from './component/Demo';



function App() {
  return (
    <div className='App'>
      <p className='para1'>Hi!   Hope you are doing well!!!</p>

      {/* <Header compName="capgemini" />
      <Greet firstName="Suchith" lastName=" satya" />
      <Greetme name="bhavya" lname="Ayyagari" />
      <Footer countryName="India" BrandName="Ltd  " />
 */}
      {/* <Lifecycles country="India" /> */}
      <Demo />

    </div>
  );
}

export default App;
