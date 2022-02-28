import React from 'react'
import Title from './components/Header'
import HdLineBars from './components/HeadlineBars'
import Contsa from './components/Content'




const App = () => {
  return (
    <div className="App">
      <Title />
      <HdLineBars />
      <Contsa/>
    </div>
  )
}

export default App





// const Container = (props) => {
//   return (
//     <div class = "Container">
      
//     </div>
//   )
// }
// const Header = (props) => {
//   return (
//     <div>
//       <h1>
//         {props.course}
//       </h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.content}<br />
//         Exercises: {props.exer_num}
//       </p>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       Moi.
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Total exercises: 
//         {props.total}
//       </p>
//     </div>
//   )
// }
// const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // return (
  //   <div>
  //     <Header course = {course} />
  //     <Content content = {part1} exer_num = {exercises1}/>
  //     <Content content = {part2} exer_num = {exercises2}/>
  //     <Content content = {part3} exer_num = {exercises3}/>
  //     <Total total = {exercises1 + exercises2 + exercises3} />
  //     <Footer />
  //   </div>
  // )