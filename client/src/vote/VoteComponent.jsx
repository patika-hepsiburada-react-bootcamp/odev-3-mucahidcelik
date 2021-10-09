import React, {useState} from 'react';
import {sendMessage} from "../socketApi";
import {useVote} from "../context/VoteContext";

const inputRef = React.createRef();

function VoteComponent() {
    const {votes} = useVote();
    const [value, setValue] = useState("");
    const vote = (language) => {
        if (!language) {
            if (!value)
                return;
            language = value;
            setValue("");
        }
        sendMessage('new-vote', language);
    };

    return (
        <div className="column">
            {
                Object.keys(votes)?.length > 0 && Object.keys(votes).map(key => {
                    return <li style={{listStyle: "none"}}>
                        <button style={{minWidth: 50}} onClick={() => vote(key)}>{key}</button>
                        <label> {votes[key]}</label>
                    </li>
                })
            }
            <input ref={inputRef} value={value} onChange={(e => setValue(e.target.value))}/>
            <button onClick={() => vote()}>Vote</button>
        </div>
    );
}

export default VoteComponent;