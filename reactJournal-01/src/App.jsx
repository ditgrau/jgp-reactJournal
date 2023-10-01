import { useState } from 'react'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'


function App() {

  return (
    <>
      <GlobalProvider>
        <Header/>
        <Balance></Balance>
        <TransactionForm>
          
        </TransactionForm>
        <h1>Hello world</h1>
      </GlobalProvider>
    </>
  )
}

export default App
