const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
  )
}

const Content = ({part1, part2, part3}) => {
  console.log(part1, part2, part3)
  return(
    <div>
      <Part part = {part1.name} exercises = {part1.exercises}/>
      <Part part = {part2.name} exercises = {part2.exercises}/>
      <Part part = {part3.name} exercises = {part3.exercises}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.yht} {props.total}</p>
    </div>
  )
}

const App = () => {
  console.log('Appin 1. tulostus')
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const yht = 'Number of exercises'

  return (
    <div>
      <Header course = {course} />
      <Content part1={part1} part2 ={part2} part3={part3}/>
      <Total yht = {yht} total = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
