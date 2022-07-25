import axios from "axios";
import { useEffect, useState } from "react";
import {API_TOKEN, API_URL} from '../consts'
import Card from "./Card";


const CoronaForCountry = () => {
    const [data, setData] = useState([]);
    const [queryText, setQueryText] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get(`${API_URL}countriesData?country=${queryText}`, {
            headers: {
                authorization: API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result)
        console.log(response)
    }
    useEffect(() => {
        fetchData();
    },[queryText])
    return (
        <>
            <div className="mb-4">
                <input placeholder="Ülke Adı Yazınız" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-violet-600" value={queryText} onChange={(e) => {setQueryText(e.target.value)}} />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {loading && <p>loading...</p>}
                {data.map((item) => {
                    return (
                        <Card key={item.country} country={item.country} totalDeaths={item.totalDeaths} totalCase={item.totalCases} totalRecovered={item.totalRecovered}/>
                    )
                })}
            </div>
        </>
    );
}

export default CoronaForCountry;