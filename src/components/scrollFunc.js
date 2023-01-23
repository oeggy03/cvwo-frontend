
const Scroll = (props) => {
    return (
      <div style={{ overflow: 'scroll',  height: '90vh'}} className ="scrollList">
        {props.children}
      </div>
    );
  };
  
  export default Scroll;