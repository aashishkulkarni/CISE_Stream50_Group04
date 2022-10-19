import React, { useEffect, useState } from "react";
import axios from "axios";

// this is container -- we can use it with any componet 
// it will be the data is available to the children 
export const DataSource = ({ children, resourceUrl, resourceName }) => {

    // state
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [msg, setMsg] = useState('')


    useEffect(() => {

        // function to fetch the data
        (async () => {
            axios.get(resourceUrl)
                .then((response) => {
                    if (response.data.length > 0)
                        setData(response.data)
                    else
                        setMsg('there is not data is this source Yet')
                    setIsLoading(false)
                })
                .catch((error) => {
                    setMsg(error.message)
                    setIsLoading(false)
                })

        })()
    }, [])

    return (
        <div className="row">
            {
                isLoading ? <h1>Loading ...</h1> :
                    data ?
                        // mapping the children, then check if each child is valideElement 
                        // if it's validElement, will mapp through all data which coming from the server 
                        // and display the child component 
                        React.Children.map(children, child => (
                            React.isValidElement(child) &&
                            data.map((item, index) => (
                                React.cloneElement(child, { [resourceName]: item })
                            ))
                        )) :
                        // if thers is any error 
                        <div class="alert alert-danger" role="alert">
                            {msg}
                        </div>

            }
        </div>
    )
}