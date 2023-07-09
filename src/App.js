import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Fragment } from "react"
import { publicRoutes } from "~/routes"
import { DefaultLayout } from "~/component/Layout"
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component

            let Layout = DefaultLayout
            if(route.layout){
              Layout = route.layout
            }else if(route.layout === null){
              Layout = Fragment
            }
            
            return (
              <Route path={route.path} element={
                <Layout >
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}
export default App
