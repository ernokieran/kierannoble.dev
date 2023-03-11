import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DecisionMaker() {
    const { listId } = useParams();

    const [options, setOptions] = useState([""]);
    const [usableOptions, setUsableOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        if (listId) {
            console.log("This app is not yet connected to an API, so it can't load a list from an ID.", `List ID: ${listId}`);

            // get list from api
            // setOptions(list);
        }
    }, []);

    useEffect(() => {
        if (options[options.length - 1] !== "") {
            setOptions([...options, ""]);
        }

        setUsableOptions(options.slice(0, -1));
    }, [options]);

    function generateRandomlySelectedOption() {
        const randomIndex = Math.floor(Math.random() * usableOptions.length);
        setSelectedOption(usableOptions[randomIndex]);
    }

    function removeItemAtIndex(index) {
        const newOptions = [...options];
        newOptions.splice(index, 1);
        setOptions(newOptions);
    }

    function itemUpdated(e, index) {
        const newOptions = [...options];
        newOptions[index] = e.target.value;
        setOptions(newOptions);
    }

    // TO DO: styling and layout for this app

    return (
        <div className="">
            <hr />
            <p>This is currently a work in progess - A better looking version will be available soon!</p>
            <p>I am currently working on some architectural advances within this application.</p>
            <hr />
            <br />
            {selectedOption && (
                <div>
                    <h1>{selectedOption}</h1>
                    <h2>Chosen from:</h2>
                    <ul>
                        {usableOptions.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                    <button className="control control__button control__button--danger" onClick={() => setSelectedOption("")}>Reset</button>
                    <button className="control control__button control__button--primary" onClick={generateRandomlySelectedOption}>Select Again</button>

                </div>
            )}
            {!selectedOption && (
                <>
                    {
                        options.map((option, index) => (
                            <div className="control control__group" key={index}>
                                <input className="control control__input" type="text" value={option} onChange={(e) => itemUpdated(e, index)} tabIndex="0" />
                                <button className="control control__button" onClick={() => removeItemAtIndex(index)} tabIndex="-1">🗑️</button>
                            </div>
                        ))
                    }
                    <button className="control control__button control__button--danger" onClick={() => setOptions([""])}>Reset</button>
                </>
            )
            }
            {
                !selectedOption && options.length > 2 && (
                    <button className="control control__button control__button--primary" onClick={generateRandomlySelectedOption}>Randomly select</button>
                )
            }
        </div >
    );
}

export default DecisionMaker;