import React from 'react';
import './App.css';
import TableShow from './TableShow';

export interface Table {
  id: number; 
  name: string;
  email: string;
  date: string;
}
const planets: Table[] = [
  {id:0,name: "earth", email: "some@example.com", date: "24.09.2029"}, 
  {id:1,name: "mars", email: "some@example.com", date: "24.09.2029"}, 
  {id:2,name: "jupyter", email: "some@example.com", date: "24.09.2029"}, 

];
function App() {
  return (
    <TableShow rows = {planets}/>
  );
}

export default App;
