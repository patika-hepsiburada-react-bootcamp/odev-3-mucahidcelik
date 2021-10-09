import React, {useState} from 'react';

const inputRef = React.createRef();

function VoteComponent(props) {
    const [value, setValue] = useState("");
    const vote = (language) => {
        if (!language) {
            if (!value)
                return;
            language = value;
            setValue("");
        }
        props.setVotes(prevVotes => {
            if (prevVotes[language]) {
                let votes = {...prevVotes};
                votes[language] += 1;
                return votes;
            } else {
                return {...prevVotes, [language]: 1};
            }
        });
    };

    return (
        <div className="column">
            {
                Object.keys(props.votes)?.length > 0 && Object.keys(props.votes).map(key => {
                    return <li style={{listStyle: "none"}}>
                        <button style={{minWidth: 50}} onClick={() => vote(key)}>{key}</button>
                        <label> {props.votes[key]}</label>
                    </li>
                })
            }
            <input ref={inputRef} value={value} onChange={(e => setValue(e.target.value))}/>
            <button onClick={() => vote()}>Vote</button>
        </div>
    );
}

export default VoteComponent;