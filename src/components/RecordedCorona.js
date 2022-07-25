import {useEffect, useState} from "react";
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";
import Card from "./Card";


const RecordedCorona = () => {
    const [loading,setLoading] = useState(false)
    const [data, setData] = useState()

    const fetchData=async ()=>{
        setLoading(true)
        const response=await  axios.get(`${API_URL}totalData`,{
            headers:{
                authorization: API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result)
    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="flex flex-col items-center justşfy-center h-full">
            {loading ? <p>loading...</p>:
                <>
                    <h1 className="text-6xl text-gray-900 mb-4">Total Case: {data?.totalCases}</h1>
                    <h1 className="text-6xl text-gray-800 mb-6">Total Deaths: {data?.totalDeaths}</h1>
                    <h1 className="text-6xl text-gray-700">Total Case: {data?.totalRecovered}</h1>
                </>
                
            }
        </div>
    )
}

export default RecordedCorona;