import "./scrollFunc.css"

const Scroll = (props) => {
    return (
      <div style={{ overflow: 'scroll',  height: '500px'}} className ="scrollList">
        {props.children}
      </div>
    );
  };
  
  export default Scroll;