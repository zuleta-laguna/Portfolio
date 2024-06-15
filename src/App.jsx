import Content from "./components/Content"
import Main from "./components/Main"
import Navigation from "./components/Navigation"

function App() {
  return (
    <div className=" w-full flex flex-col items-center">
    <Navigation/>
    <Main/>
    <Content/>
    </div>
  )
}

export default App
