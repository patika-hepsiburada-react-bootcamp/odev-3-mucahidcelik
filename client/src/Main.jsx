import React, {useEffect, useState} from 'react';
import ChartComponent from "./vote/ChartComponent";
import VoteComponent from "./vote/VoteComponent";
import {useVote} from "./context/VoteContext";
import {connectSocket, subscribeToNewMessages} from "./socketApi";

function Main() {
    const {setVotes} = useVote();

    useEffect(() => {
        connectSocket();
        subscribeToNewMessages((data) => {
            setVotes(data);
        });
    }, [setVotes]);

    return (
        <div className="row">
            <VoteComponent/>
            <ChartComponent/>
        </div>
    );
}

export default Main;
