import React  from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            count2:0,

        }
        console.log("child constructor");
    }

    componentDidMount(){
        console.log("chidren component did mount  called here")
    }
    render(){
        console.log("child render");
        const {name, location}= this.props;
        const {count,count2}= this.state;
        return (<>
            <div className="user-card">
                <h1> Count: {count}</h1>
                <h1> Count2: {count2}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count2:this.state.count2+1
                    });
                }}>Count Increase</button>
                <h2>Name : {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact : rajesh@gmail.com </h2>
            </div>
            </>);
    }
}
export default UserClass;