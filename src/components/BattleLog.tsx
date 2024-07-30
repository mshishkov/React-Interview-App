function BattleLog(props: { list: string[]; }) {
    const { list } = props;

    return <div className="battle-logs">
        <div className="title">Battle Log</div>
        { list.map((row: string, index ) => <div className="row" key={index}>- {row}</div>) }
    </div>   
}

export default BattleLog;