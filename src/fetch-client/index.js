const getData = () => {
    return fetch('https://api.t3d.live/materials/lists')
        .then(res => res.json())
        .then(newRes => {

            return newRes.materialsList.map((itemContent) => {
                const {name,description,icon} = itemContent;
                return {name,description,icon}
            })
        })
}

export default getData;