const Header = (props) => {
  console.log(props)
  return (
    
    <div><center> <p>
        <h1>{props.course}</h1>
      </p></center>
      </div> 
  )
}

const Part =(props)=> {

return (<div>
    <p>
      Name: {props.nombre}. {props.exercises} exercises
    </p> </div> )

}

const Content = (props) => {
  console.log(props)
  return (<div>
    
      <Part nombre={props.tabla[0].nombre} exercises={props.tabla[0].exercises} />
      <Part nombre={props.tabla[1].nombre} exercises={props.tabla[1].exercises} />
      <Part nombre={props.tabla[2].nombre} exercises={props.tabla[2].exercises} />
    
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'

  const tabla = [
    { nombre : 'Fundamentals of React', exercises : 10 },
  { nombre : 'Using props to pass data', exercises : 7},
{nombre : 'State of a component', exercises : 14 },
]

  
  return (
    <div>
      <Header course={course} />
      <Content tabla={tabla} />
    </div>
  )
}

export default App


/*1.2: Información del Curso, paso 2

Refactoriza el componente Content para que no muestre ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte.*/
