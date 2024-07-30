import React from "react";

function BattleLog(props) {
    const { list } = props;

    return <div className="battle-logs">
        <div className="title">Battle Log</div>
        { list.map((row, index) => <div className="row" key={index}>- {row}</div>) }
    </div>   
}

export default BattleLog;