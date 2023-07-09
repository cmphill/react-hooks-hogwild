import {useState} from "react";
import HogFilter from "./HogFilter";
import HogTiles from "./HogTiles";
function HogList({hogs}) {

	const [hogFilter, setHogFilter] = useState("All")
	function filterSelect(filter) {(
		setHogFilter(filter)
	)}

	const HogFiltering = hogs.filter((hog) => {
		if (hogFilter === "All") {
			return true
		} else if (hogFilter === "Greased") {
			return hog.greased
		} else {
			return !hog.greased
		}
	})

	const hogTiles = HogFiltering.map((hog,index) => (
	<HogTiles
	key={index}
	name={hog.name}
	specialty={hog.specialty}
	greased={hog.greased}
	weight={hog.weight}
	highestMedal={hog['highest medal achieved']}
	image={hog.image}
	/>
))

	return <>
	<HogFilter filterSelect={filterSelect}/>
	<div>{hogTiles}</div>
	</>

}

export default HogList