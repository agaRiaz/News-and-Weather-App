
import '../App.css';
import Weather from './Weather';
import News from './News';





function Both() {
  return (
    <>
    <div className='container'>
    
    <div className='weatherComp'>
      <Weather />
    <div className='lines'><hr/><hr/></div>
    </div>
    <div className='newsComp'>
      <News />
    </div>

    </div>
    </>
  );
}

export default Both;
