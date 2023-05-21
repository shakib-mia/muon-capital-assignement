import React, { useState } from "react";

const LoginPage = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const checkConnection = () => {
    // window.ethereum.disconnect();
    // console.log(window.ethereum.isConnected());

    if (window.ethereum) {
      try {
        window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((res: any) => {
            localStorage.setItem("token", res[0]);
            window.location.reload();
          });

        // console.log(accounts[0]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="text-white selection:text-black selection:bg-white h-screen flex items-center justify-center">
      <button
        className="px-5 py-3 bg-white text-black rounded"
        onClick={checkConnection}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
