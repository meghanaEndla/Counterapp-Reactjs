import {Component} from 'react'

class Welcome extends Component {
  render(props) {
    const {name} = this.props
    return <h1>HEllo {name} </h1>
  }
}
export default Welcome
