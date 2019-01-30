const URL = 'http://localhost:3001/users/'

const fetchedTransactions = data => {
  return {
    type: 'FETCHED_TRANSACTIONS',
    payload: data
  }
}

const fetchingTransactions = userId => {
  return dispatch => {
    fetch(`${URL}${userId}`)
      .then(res => res.json())
      .then(data =>
        dispatch(fetchedTransactions(data))
      )
  }
}

const postedTransaction = data => {
  debugger
  return {
    type: 'POSTED_TRANSACTIONS',
    payload: data
  }
}

const postingTransaction = object => {
  debugger
  return dispatch => {
    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
      .then(res => res.json())
      .then(data =>
        dispatch(postedTransaction(data))
      )
  }
}

export { fetchingTransactions, postingTransaction }