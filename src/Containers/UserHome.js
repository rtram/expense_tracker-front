import React, { Component } from "react"
import Summary from "./Summary"
import CategoryContainer from "./CategoryContainer"
import NavBarContainer from "./NavBarContainer"

export default class UserHome extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: null,
      transactions: null
    }
  }

  fetchTransactions = () => {
    fetch("http://localhost:3001/users/1")
      .then(res => res.json())
      .then(json => (
        this.setState({
          transactions: json
        })
      ))
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <Summary />
        <CategoryContainer />
      </div>
    )
  }
}
