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

const Content = (props) => {
  console.log(props)
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
      <Part part1 = {part1} exercises1 = {exercises1}/>
      <Part part2 = {part2} exercises2 = {exercises2}/>
      <Part part3 = {part3} exercises3 = {exercises3}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const yht = 'Number of exercises'

  return (
    <div>
      <Header course = {course} />
      <Content />
      <Total yht = {yht} total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App