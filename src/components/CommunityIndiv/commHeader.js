const CommHeader = ({comm}) => {
    return (
    <div className="commHeader">
        <img className = "commIcon" src={comm.image} alt="Icon"/>
        <h1 className="commTitle">The {comm.name} community</h1>
        <div className="commDesc">
            <text className="commsHeaderDesc">{comm.desc}</text>
        </div>
    
    </div>  )
}

export default CommHeader 