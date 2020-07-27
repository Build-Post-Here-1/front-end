import React from "react"
import { Redirect } from "react-router-dom"
import {Route } from "react-router-dom"



const PrivateRoute = ({component: Component, ... rest}) => {
    return (
        <Route
        {...rest}
        render={() => {
            if (localStorage.getItem("token")){
                return <Component/> 
            } else {
                return <Redirect to ='/login' />
            }
        }}
      />  
    )
}

export default PrivateRoute;