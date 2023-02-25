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

    // TO DO: styling and layout for this app

    return (
        <div>
            {selectedOption && (
                <div>
                    <h1>{selectedOption}</h1>
                    <h2>Chosen from:</h2>
                    <ul>
                        {usableOptions.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                    <button onClick={() => setSelectedOption("")}>Reset</button>
                    <button onClick={() => {
                        const randomIndex = Math.floor(Math.random() * usableOptions.length);
                        setSelectedOption(usableOptions[randomIndex]);
                    }
                    }>Select Again</button>

                </div>
            )}
            {!selectedOption && (
                <>
                    {
                        options.map((option, index) => (
                            <div key={index}>
                                <input type="text" value={option} onChange={(e) => {
                                    const newOptions = [...options];
                                    newOptions[index] = e.target.value;
                                    setOptions(newOptions);
                                }
                                } />
                                <button onClick={() => {
                                    const newOptions = [...options];
                                    newOptions.splice(index, 1);
                                    setOptions(newOptions);
                                }
                                }>🗑️</button>
                            </div>
                        ))
                    }
                    <button onClick={() => setOptions([""])}>Reset</button>
                </>
            )}
            {!selectedOption && options.length > 2 && (
                <button onClick={() => {
                    const randomIndex = Math.floor(Math.random() * usableOptions.length);
                    setSelectedOption(usableOptions[randomIndex]);
                }
                }>Randomly select</button>
            )}
        </div>
    );
}

export default DecisionMaker;