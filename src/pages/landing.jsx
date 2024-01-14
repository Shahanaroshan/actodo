import Header from "../components/Header.jsx"
import Card from "../components/Card.jsx"
import TodoContainer from "../components/TodoContainer.jsx"
import {useLocation} from "react-router-dom"
function Landing()
{
  const data=useLocation()
  return(<div className="bg-black p-16">
  <div className="bg-[#EFEFEF] p-10 border rounded-md">
    {/* Header */}
    <Header name={data.state.user}/>
     {/* Card */}
    <div className="flex justify-between gap-7 my-5 flex-wrap">
      <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
      <Card bgcolor={"#FD6663"} title={"December 20"} subtitle={"14:23:08"} />
      <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"} />
    </div>
    {/* To do Container */}
  <TodoContainer/>
  
  </div>
</div>
)
}
export default Landing