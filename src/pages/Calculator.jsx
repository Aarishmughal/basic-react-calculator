import React, { useState } from 'react'

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (event) => {
        setOperation(event.target.value)
    }
    const computeResult = () => {
        if (operation == "+")
            setResult(Number(num1) + Number(num2));
        else if (operation == "-")
            setResult(Number(num1) - Number(num2));
        else if (operation == "*")
            setResult(Number(num1) * Number(num2));
        else if (operation == "/")
            setResult(Number(num1) / Number(num2));
    }
    return (
        <>
            <div className='card shadow-lg' style={{ minWidth: "500px" }}>
                <h1 className='card-header fw-light'>Simple Calculator</h1>
                <div className='card-body'>
                    <div className='mb-2'>
                        <label className='form-text'>Number 1</label>
                        <input type='number' className='form-control' value={num1} onChange={(e) => setNum1(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label className='form-text'>Operation</label>
                        <select className='form-control' onChange={handleChange} value={operation}>
                            <option value={""} selected disabled>Select Operation</option>
                            <option value={"+"}>+</option>
                            <option value={"-"}>-</option>
                            <option value={"*"}>*</option>
                            <option value={"/"}>/</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='form-text'>Number 2</label>
                        <input type='number' className='form-control' value={num2} onChange={(e) => setNum2(e.target.value)} />
                    </div>
                    <button className='btn btn-primary w-100' onClick={computeResult}>Get Result</button>
                </div>
                <div className='card-footer'>
                    <label className='form-text'>Result</label>
                    <input type='text' className='form-control' disabled readOnly value={result} />
                </div>
            </div>
        </>
    )
}

export default Calculator