import React, {useState} from 'react';
import ChartComponent from "./vote/ChartComponent";
import VoteComponent from "./vote/VoteComponent";

function Main() {
    const [votes, setVotes] = useState({go: 12, js: 12});
    return (
        <div className="row">
            <VoteComponent votes={votes} setVotes={setVotes}/>
            <ChartComponent votes={votes}/>
        </div>
    );
}

export default Main;
