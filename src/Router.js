import Add from "./components/Add";
import List from "./components/List";
import {Routes, Route} from "react-router-dom"


export default function Router(){
    return(
        <Routes>
            <Route path="/add" element={<Add/>}/>
            <Route path="/list" element={<List/>}/>
            
        </Routes>
    )
}