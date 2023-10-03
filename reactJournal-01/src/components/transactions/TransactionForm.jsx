import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";


function TransactionForm() {
    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState()
    const [amount, setAmount] = useState()

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({ 
            id: window.crypto.randomUUID(), 
            description, 
            amount: +amount }) //lo convierte en integer 
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter a description" onChange={(e) => setDescription(e.target.value)} 
                className="bg-zinc-600 text-white px-3 py-1 rounded-lg block mb-2 w-full"/>
                <input type="number" step="0.01" placeholder="00.00" onChange={(e) => setAmount(e.target.value)} 
                className="bg-zinc-600 text-white px-3 py-1 rounded-lg block mb-2 w-full"/>
                <button className="bg-indigo-700 text-white px-3 py-1 rounded-lg block mb-2 w-full ">Add Transaction</button>
            </form>
        </div>
    )
}

export default TransactionForm