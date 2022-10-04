import React, { useEffect, useState } from "react";
import axios from "axios";
import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";

import DataTable from "../components/dataTable/DataTable";
const SEPractice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8080/article/getAllArticles";
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        /*convert from json to js array to store them */
        setData(JSON.parse(JSON.stringify(response.data)));
        console.log(data);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {/* <Styles>
        <DataTable columns={tablecolumns}
          data={articles}
        />
      </Styles> */}
      {isLoading ? (
        <h1>Loading data ....</h1>
      ) : data.length > 0 ? (
        <Styles>
          <DataTable columns={tablecolumns} data={data} />
        </Styles>
      ) : (
        <h1>Loading data ....</h1>
      )}
    </div>
  );
};

export default SEPractice;
