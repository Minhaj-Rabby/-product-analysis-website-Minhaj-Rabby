import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios("data.json").then((res) => setData(res.data));
	}, []);

	return (
		<DataContext.Provider value={{ data: data }}>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;
