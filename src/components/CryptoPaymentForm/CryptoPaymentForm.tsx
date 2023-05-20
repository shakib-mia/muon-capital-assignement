import React, { useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

const CryptoPaymentsForm = () => {
  const [amount, setAmount] = useState(0); // new line

  const [destinationAddress, setDestinationAddress] = useState(""); // new line

  const startPayment = async (event: any) => {
    // new line

    console.log({ amount, destinationAddress });

    try {
      if (!window.ethereum) {
        throw new Error("No crypto wallet found. Please install it.");
      }

      await window.ethereum.send("eth_requestAccounts");

      // const  provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider = new ethers.WebSocketProvider(window.ethereum);

      const signer = provider.getSigner();

      ethers.getAddress(destinationAddress);

      const transactionResponse = await (
        await signer
      ).sendTransaction({
        to: destinationAddress,

        value: ethers.parseEther(amount.toString()),
      });

      console.log({ transactionResponse });
    } catch (error: any) {
      console.log({ error });
    }
  };

  return (
    <div className="text-black">
      {/* added onChange and onClick attributes */}

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        // className="col-12 form-control mb-3"
        onChange={(event) => {
          setAmount(Number.parseFloat(event.target.value));
        }}
      />

      <input
        placeholder="Destination address"
        value={destinationAddress}
        // className="col-12 form-control mb-3"
        onChange={(event) => {
          setDestinationAddress(event.target.value);
        }}
      />

      <button className="bg-white" onClick={startPayment}>
        Send Payment
      </button>
    </div>
  );
};

export default CryptoPaymentsForm;
