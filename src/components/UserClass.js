import React  from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={  
            userInfo:{
                name:"Dummy name",
                location:"default",
                avatar_url:"https://dummy-photo"
            } 

        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/"+this.props.name);
        const json =  await data.json();
        this.setState({userInfo: json});
        
    }

    componentDidUpdate(){
        console.log("component did update is called");
    }
    componentWillUnmount(){
        console.log("component unmount is called ")
    }
    render(){
        const {name, location,avatar_url }= this.state.userInfo;
        return (<>
            <div className="user-card">
                <img  src={avatar_url} alt="no-image"/>
                <h2>Name : {name}</h2>
                <h2>Location: {location?location:"U.S.A"}</h2>
                <h2>Contact : rajesh@gmail.com </h2>
            </div>
            </>);
    }
}
export default UserClass;