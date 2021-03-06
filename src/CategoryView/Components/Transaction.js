import React, { Component } from "react"
import { connect } from 'react-redux'
import '../Containers/CategoryDetails.css';
import { FormControl, Button} from "react-bootstrap"
import { updatingTransaction, deletingTransaction } from '../../redux/actions/transactions.js'

class Transactions extends Component {

  constructor() {
    super()
    this.state = {
      show: false,
      id: "",
      date: "",
      description: "",
      amount: ""
    }
  }

  componentDidMount() {
    this.setTransactionState()
  }

  setTransactionState = () => {
    this.setState({
      id: this.props.transactionObject.id,
      date: this.props.transactionObject.date,
      description: this.props.transactionObject.description,
      amount: this.props.transactionObject.amount
    })
  }

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  }

  updateObject = () => {
    let updateObject = {
      id: this.state.id,
      date: this.state.date,
      description: this.state.description,
      amount: parseFloat(this.state.amount),
    }
    return updateObject
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  handleUpdate = () => {
    this.props.updatingTransaction(this.updateObject())
  }

  handleDelete = () => {
    this.props.deletingTransaction(this.updateObject())
  }

  render() {
    return (
      <tr id="table">
        {!this.state.show ?
        <td>{this.state.date}</td> :
        <td>
        <FormControl
          type="date"
          label="Date"
          placeholder="Date"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        </td>}

        {!this.state.show ?
        <td>{this.state.description}</td> :
        <td>
        <FormControl
          type="text"
          label="Description"
          placeholder="description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        </td>
        }

        <td>{this.props.transactionObject.category.name}</td>

        {!this.state.show ?
        <td>${Number.isInteger(this.state.amount) ? this.state.amount + ".00" : this.state.amount}</td> :
        <td>
        <FormControl
          type="number"
          label="Amount"
          placeholder="Amount"
          name="amount"
          value={this.state.amount}
          onChange={this.handleChange}
        />
        </td>
        }

        {!this.state.show ?
          <td>
            <Button
              id="hvr-fade"
              ref={button => {
                this.target = button;
              }}
              onClick={this.handleToggle}
            >
              ...
            </Button>
          </td> :
          <td>
            <Button
              id="hvr-fade"
              ref={button => {
                this.target = button;
              }}
              onClick={() => {
                this.handleToggle()
                this.handleUpdate()
              }}
            >
              Save
            </Button>
            <Button
              id="hvr-fade-red"
              ref={button => {
                this.target = button;
              }}
              onClick={() => {
                this.handleToggle()
                this.handleDelete()
              }}
            >
              Delete
            </Button>
          </td>
        }

      </tr>
    )
  }
}

export default connect(null, { updatingTransaction, deletingTransaction })(Transactions)
