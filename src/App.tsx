function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(API_KEY);
  return <div className='display'>{API_KEY}</div>;
}

export default App;
