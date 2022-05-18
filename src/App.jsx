
import './App.css';
import { Paycard } from './components/Paycard/Paycard';


function App() {
  return (
    <div>
      <Paycard 
      date="28 sept 2021" 
      buttonText = "Case Study"  
      category= "mobile-desktop" 
      title="Amazon Pay Gift"  
      backgroundColor="rgb(225, 169, 29)"
      logoSrc="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
      />
      <Paycard 
      date="28 sept 2021" 
      buttonText = "Case Study"  
      category= "mobile-desktop" 
      title="Amazon Pay Gift"  
      backgroundColor="rgb(225, 169, 29)"
      logoSrc="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
      />
         <Paycard 
      date="13-02-2021" 
      buttonText = "Case Study"  
      category= "mobile-desktop" 
      title="Apple"  
      backgroundColor="rgb(253, 252, 251)"
      logoSrc="https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png"
      />
      hello world
    </div>
  );
}

export default App;
