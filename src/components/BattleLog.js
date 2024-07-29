import React from "react";

class BattleLog extends React.Component {    
    render() {
        return <div className="battle-logs">
            {this.props.list?.map((row, index) => <>
                <div className="row">
                    - {row}
                </div>
            </>)}
        </div>
    }   
}

export default BattleLog;