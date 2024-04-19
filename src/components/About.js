import {Component} from 'react'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';
class About extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }
  render(){
    return (
      <div>
        <h1> About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser})=>{
              console.log(loggedInUser);

            }}
          </UserContext.Consumer>
        </div>
        <h1> Namsate React By Javascript</h1>
        <UserClass name = {"shivangi"} location ={"nagri himachal pradesh"}/>
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
