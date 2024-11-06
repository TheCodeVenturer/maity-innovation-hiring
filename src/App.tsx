import { useEffect, useState } from "react";

interface Data {
	title: string;
	image: string;
	price: Number;
	category: string;
}

const App = () => {
	const [dataFetched, setdataFetched] = useState([]);
	useEffect(() => {
		const fetcher = async () => {
			const response = await fetch(
				"https://fakestoreapi.com/products?sort=desc"
			);
			const data = await response.json();
			setdataFetched(data);
		};
		fetcher();
	}, []);
	if (!dataFetched) return <div>Loading...</div>;
	return (
		<div className="mainBody ">
			{dataFetched.map((ele: Data, id) => {
				return (
					<div key={id} className="container">
						<h2>{ele.title}</h2>
						<img src={ele.image} />
						<div className="price">{`Rs${ele.price}`}</div>
						<p>{ele.category}</p>
					</div>
				);
			})}
		</div>
	);
};

export default App;
