import {Component} from 'react'
import UserClass from './UserClass'

class About extends Component{
  constructor(props){
    super(props);
    console.log("parent constructor")
  }
  componentDidMount(){
    console.log("parent component did mount here")
  }
  render(){
    console.log("parent render is called");
    return (
      <div>
        <h1> About</h1>
        <h1> Namsate React By Javascript</h1>
        <UserClass name = {"swapnil banta class"} location ={"nagri himachal pradesh"}/>
      </div>
    )
  }

}


// const About = () => {
//   return (
//     <div>
//       <h1> About</h1>
//       <h1> Namsate React By Javascript</h1>
//       <UserClass name = {"swapnil banta class"} location ={"nagri himachal pradesh"}/>
//     </div>
//   )
// }

export default About
