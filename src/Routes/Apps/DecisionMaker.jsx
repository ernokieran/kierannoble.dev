import { useEffect, useState } from 'react';

function DecisionMaker() {
    const [options, setOptions] = useState([""]);
    const [usableOptions, setUsableOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    // useEffect(() => {
    // get options from api
    // setOptions(options);
    // }, []);

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