import React from "react";
import Article from "../components/Article/Article";
import { DataSource } from "../container/DataSource";

const Moderator = () => {
    // the datasource will take the resouce name which will be in our state is [article]
    // and the link which will fetch the data 
    return (
        <DataSource resourceName='article' resourceUrl='http://localhost:8080/article/getAllPendingArticles'>
            {/* the Article commponent which will display for each article  */}
            <Article />
        </DataSource>
    )
}

export default Moderator