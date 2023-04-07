import GlobalStyle from './styles/styleGlobal'
import Form from './components/generator/form'
import Tasks from './components/content/tasks'
import { useTasks } from './hooks/useTasks'


function App() {
  const {data} = useTasks()
  
  return (
    <div>
      <GlobalStyle />
      <Form />
      {
        data?.map((res) => {
          return <Tasks key={res.id} title={res.title} statusTask={res.status} id={res.id}/>
        })
      }
    </div>
  )
}

export default App
