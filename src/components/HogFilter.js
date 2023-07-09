

function HogFilter({filterSelect}) {
    const filtering = (e) => {
        filterSelect(e.target.value)
    }
    return (
        <div className="filterWrapper">
            <select onChange={filtering}>
                <label>Sort</label>
            <option value = "All">All</option>
            <option value="Ungreased">Ungreased</option>
            <option value ="Greased">Greased</option>
            <option value ="Name">Sort by Name</option>
            <option value ="Weight">Sort by Weight</option>
            </select>
        </div>

    )


}

export default HogFilter