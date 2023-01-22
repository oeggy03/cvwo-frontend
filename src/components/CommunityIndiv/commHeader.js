const CommHeader = ({comm}) => {
    return (
    <div>
        <div className="commHeader">
            <img className = "commIcon" src={comm.image}/>
            <h1 className="commTitle">The {comm.name} community</h1>
            <div className="commDesc">
                <h3>{comm.desc}</h3>
            </div>
        
        </div>  
        <div ></div>  
        
    </div>)
}

export default CommHeader 