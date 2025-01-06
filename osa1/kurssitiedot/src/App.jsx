const Header = (props) => {
  console.log('header')
  console.log(props)
  return(
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
  )
}

const Content = ({parts}) => {
  console.log('content')
  console.log(parts)
  
  return(
    <div>
      <Part part = {parts[0].name} exercises = {parts[0].exercises}/>
      <Part part = {parts[1].name} exercises = {parts[1].exercises}/>
      <Part part = {parts[2].name} exercises = {parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  console.log('part')
  console.log(props)
  
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

  const Total = ({parts}) => {
  console.log('total')
  console.log(parts)
  
  return(
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  console.log('Appin 1. tulostus')

    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]


  return (
    <div>
      <Header course = {course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App
