import React, {useState} from 'react'

function NewGameForm() {
    const initialState={
        name: "",
        tile1Description: "",        tile1Value:0,
        tile2Description: "",        tile2Value:0,
        tile3Description: "",        tile3Value:0,
        tile4Description: "",        tile4Value:0,
        tile5Description: "",        tile5Value:0,
        tile6Description: "",        tile6Value:0,
        tile7Description: "",        tile7Value:0,
        tile8Description: "",        tile8Value:0,
        tile9Description: "",        tile9Value:0,
        tile10Description: "",        tile10Value:0,
        tile11Description: "",        tile11Value:0,
        tile12Description: "",        tile12Value:0,
        tile13Description: "",        tile13Value:0,
        tile14Description: "",        tile14Value:0,
        tile15Description: "",        tile15Value:0,
        tile16Description: "",        tile16Value:0,
        tile17Description: "",        tile17Value:0,
        tile18Description: "",        tile18Value:0,
        tile19Description: "",        tile19Value:0,
        tile20Description: "",        tile20Value:0,
        tile21Description: "",        tile21Value:0,
        tile22Description: "",        tile22Value:0,
        tile23Description: "",        tile23Value:0,
        tile24Description: "",        tile24Value:0,
        tile25Description: "",        tile25Value:0,        
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState((prevState) => ({...prevState, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/games`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formState.name,
                tiles:[
                    {position:1, description: formState.tile1Description, value: formState.tile1Value},
                    {position:2, description: formState.tile2Description, value: formState.tile2Value},
                    {position:3, description: formState.tile3Description, value: formState.tile3Value},
                    {position:4, description: formState.tile4Description, value: formState.tile4Value},
                    {position:5, description: formState.tile5Description, value: formState.tile5Value},
                    {position:6, description: formState.tile6Description, value: formState.tile6Value},
                    {position:7, description: formState.tile7Description, value: formState.tile7Value},
                    {position:8, description: formState.tile8Description, value: formState.tile8Value},
                    {position:9, description: formState.tile9Description, value: formState.tile9Value},
                    {position:10, description: formState.tile10Description, value: formState.tile10Value},
                    {position:11, description: formState.tile11Description, value: formState.tile11Value},
                    {position:12, description: formState.tile12Description, value: formState.tile12Value},
                    {position:13, description: formState.tile13Description, value: formState.tile13Value},
                    {position:14, description: formState.tile14Description, value: formState.tile14Value},
                    {position:15, description: formState.tile15Description, value: formState.tile15Value},
                    {position:16, description: formState.tile16Description, value: formState.tile16Value},
                    {position:17, description: formState.tile17Description, value: formState.tile17Value},
                    {position:18, description: formState.tile18Description, value: formState.tile18Value},
                    {position:19, description: formState.tile19Description, value: formState.tile19Value},
                    {position:20, description: formState.tile20Description, value: formState.tile20Value},
                    {position:21, description: formState.tile21Description, value: formState.tile21Value},
                    {position:22, description: formState.tile22Description, value: formState.tile22Value},
                    {position:23, description: formState.tile23Description, value: formState.tile23Value},
                    {position:24, description: formState.tile24Description, value: formState.tile24Value},
                    {position:25, description: formState.tile25Description, value: formState.tile25Value},
                ]
            })
        })
        .then(r=>r.json)
        .then(data=>{
            setFormState(initialState)
        })
    }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <label>Game Name: </label>
        <input type="text" name="name" value={formState.name} onChange = {handleChange}></input>
        <div className="grid">
            <div className="grid-item">Tile 1: <input type="text" name="tile1Description" value={formState.tile1Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile1Value" value={formState.tile1Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 2: <input type="text" name="tile2Description" value={formState.tile2Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile2Value" value={formState.tile2Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 3: <input type="text" name="tile3Description" value={formState.tile3Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile3Value" value={formState.tile3Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 4: <input type="text" name="tile4Description" value={formState.tile4Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile4Value" value={formState.tile4Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 5: <input type="text" name="tile5Description" value={formState.tile5Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile5Value" value={formState.tile5Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 6: <input type="text" name="tile6Description" value={formState.tile6Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile6Value" value={formState.tile6Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 7: <input type="text" name="tile7Description" value={formState.tile7Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile7Value" value={formState.tile7Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 8: <input type="text" name="tile8Description" value={formState.tile8Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile8Value" value={formState.tile8Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 9: <input type="text" name="tile9Description" value={formState.tile9Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile9Value" value={formState.tile9Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 10: <input type="text" name="tile10Description" value={formState.tile10Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile10Value" value={formState.tile10Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 11: <input type="text" name="tile11Description" value={formState.tile11Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile11Value" value={formState.tile11Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 12: <input type="text" name="tile12Description" value={formState.tile12Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile12Value" value={formState.tile12Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 13: <input type="text" name="tile13Description" value={formState.tile13Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile13Value" value={formState.tile13Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 14: <input type="text" name="tile14Description" value={formState.tile14Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile14Value" value={formState.tile14Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 15: <input type="text" name="tile15Description" value={formState.tile15Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile15Value" value={formState.tile15Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 16: <input type="text" name="tile16Description" value={formState.tile16Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile16Value" value={formState.tile16Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 17: <input type="text" name="tile17Description" value={formState.tile17Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile17Value" value={formState.tile17Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 18: <input type="text" name="tile18Description" value={formState.tile18Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile18Value" value={formState.tile18Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 19: <input type="text" name="tile19Description" value={formState.tile19Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile19Value" value={formState.tile19Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 20: <input type="text" name="tile20Description" value={formState.tile20Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile20Value" value={formState.tile20Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 21: <input type="text" name="tile21Description" value={formState.tile21Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile21Value" value={formState.tile21Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 22: <input type="text" name="tile22Description" value={formState.tile22Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile22Value" value={formState.tile22Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 23: <input type="text" name="tile23Description" value={formState.tile23Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile23Value" value={formState.tile23Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 24: <input type="text" name="tile24Description" value={formState.tile24Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile24Value" value={formState.tile24Value} onChange = {handleChange}></input></div>
            <div className="grid-item">Tile 25: <input type="text" name="tile25Description" value={formState.tile25Description} onChange = {handleChange}></input> <br/> Value: <input type="number" name="tile25Value" value={formState.tile25Value} onChange = {handleChange}></input></div>
        </div>
        <button type="submit">Submit board as a new game.</button>
    </form>
  )
}

export default NewGameForm