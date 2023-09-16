function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(API_KEY);
  return <div className='display'>{API_KEY}</div>;
}

export default App;
