import { useEffect, useState } from "react";


const useServices = (asc,search) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${asc?'asc':'desc'}&search=${search}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }

    , [asc,search])
    console.log(services)
    return services;
};

export default useServices;