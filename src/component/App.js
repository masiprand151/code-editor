import React from "react";
import Sidebar from "./Sidebar";

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="body">
                <Sidebar/>
                <div className="right">2</div>
            </div>
            <div className="footer">3</div>
        </div>
    );
}

export default App;