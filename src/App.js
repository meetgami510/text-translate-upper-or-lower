import './App.css';
import Navbar from './componet/Navbar'
import TextForm from './componet/TextForm'

function App() {
      return (
        <>
            <Navbar titale = "Starfly" about = "About starfly"/>
            <div className="container my-3">
              <TextForm  heading = "Enter the Text :"/>
            </div>
            
        </>
        
  );
}

export default App;
