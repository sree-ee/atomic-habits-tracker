import { useState } from 'react';
import './App.css';

function HabitCategories({ name }) {
  return (
    <div className="habit-category">
      <p>{name}</p>
    </div>
  );
}
function AddTask(){
  return(
    <>

    </>
  )
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <h1>Atomic Habits Tracker</h1>
      <p className="subtitle">Tiny Changes, Remarkable Results</p>
      <div className="habit-container">
        <HabitCategories name="Health" />
        <HabitCategories name="Study" />
        <HabitCategories name="Career" />
        <HabitCategories name="Sports" />
        <HabitCategories name="Social" />
        <HabitCategories name="Nutrition"/>
      </div>
    </div>
  );
}

export default App;

