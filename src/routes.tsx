import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/index";

function Routes () {

    return (

        <BrowserRouter>
        
            <Route path="/dashboard" component={Dashboard} />

        </BrowserRouter>

    );

}

export default Routes;