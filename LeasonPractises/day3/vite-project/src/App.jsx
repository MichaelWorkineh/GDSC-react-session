import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DisplayList from './DisplayList'
import './App.css'

function App() {
  const nameList = 
  [
    { id: 1, name: "Aurora", imageURL:"./assests/Aurora.jpg"},
    { id: 2, name: "Zephyr", imageURL:"./assests/Zephyr.webp"},
    { id: 3, name: "Caspian", imageURL:"./assests/caspian.jpg"},
    { id: 4, name: "Lyra", imageURL:"./assests/Lyra.jpg"},
    { id: 5, name: "Juniper", imageURL:"./assests/Juniper.jpg"},
    { id: 6, name: "Rowan", imageURL:"./assests/Rowan.jpg"},
    { id: 7, name: "Phoenix", imageURL:"./assests/Phoenix.jpg"},
    { id: 8, name: "Indigo", imageURL:"./assests/Indigo.jpg"},
    { id: 9, name: "Ember", imageURL:"./assests/Ember.jpg"},
    { id: 10, name: "Clementine", imageURL:"./assests/Clementine.jpg"},
];
  return (
    <>
      <h1> List of names </h1>
      {nameList.map(nameList => (<DisplayList key={nameList.id} {...nameList}/>))}
    </>
  )
}

export default App
