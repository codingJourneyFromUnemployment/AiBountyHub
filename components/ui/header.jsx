'use client'

import { signIn , useSession } from 'next-auth/react'
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Link from 'next/link'
import HeaderLogo from '@/components/ui/header-logo'
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { set } from 'mongoose';

function Header() {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error } = useConnect()
  const { data: session, status } = useSession();
  
  // const [account, setAccount] = useState(null);
	// const [signer, setSigner] = useState(null);
  // const [isConnectig, setIsConnecting] = useState(false);

  function shortenAddress(address, chars = 4) {
    if (!address) return "";
    const prefix = address.substring(0, chars + 2);
    const suffix = address.substring(address.length - chars);
    return `${prefix}...${suffix}`;
  }

  async function handleLogin() {
    if (!window.ethereum) {
      alert('Please install a web3 wallet, such as MetaMask, to use this site.');
    }

    setIsConnecting(true);
    let timer = setTimeout(() => {
      setIsConnecting(false);
      alert('Connection request timed out. Please try again.');
    }, 10000);

    try {
      if (accountData?.address) {
        signIn('credentials', { address: accountData?.address });
        return;
      }
      const {data, error} = await connect(connectData.connectors[0]);
      if(error){
        alert('error connecting to wallet');
      }
      signIn('credentials', { address: data?.account });
    } catch (error) {
      alert(error.message)
    } finally {
      clearTimeout(timer);
      setIsConnecting(false);
    }
  }

  useEffect(() => {
    handleLogin();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleLogin);
    }
    return () => {
      window.ethereum.removeListener('accountsChanged', handleLogin);
    }
  }, []);

  // async function getAccountAndSigner() {
  //   if (!window.ethereum) {
  //     alert('Please install a web3 wallet, such as MetaMask, to use this site.');
  //   }

  //   setIsConnecting(true);
  //   let timer = setTimeout(() => {
  //     setIsConnecting(false);
  //     alert('Connection request timed out. Please try again.');
  //   }, 10000);

  //   try {
  //     const provider = new ethers.BrowserProvider(window.ethereum);
  //     const accounts = await provider.send('eth_requestAccounts', []);
  //     clearTimeout(timer);
  //     setAccount(accounts[0]);
  //     const signer = provider.getSigner();
  //     setSigner(signer);
  //   } catch (error) {
  //     clearTimeout(timer);
  //     console.log(error);
  //     alert('pls unlock your web3 wallet (chrome extension) first');
  //   } finally {
  //     setIsConnecting(false);
  //   }
	// }

  // useEffect(() => {
	// 		console.log(`account changed to ${account}`);
	// }, [account]);

	// useEffect(() => {
	// 	try {
	// 		getAccountAndSigner();
	// 	} catch (error) {
	// 		console.log(error);
	// 	}

	// 	if(window.ethereum) {
	// 		window.ethereum.on('accountsChanged', getAccountAndSigner);
	// 	}

	// 	return () => {
	// 		 window.ethereum.removeListener('accountsChanged', getAccountAndSigner);
	// 	}
	// }, []);

  return (
    <header className="absolute w-full bg-slate-900 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <HeaderLogo />
          <div>
            {account ? (
              <div className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full">
                {shortenAddress(account)}
              </div>
            ) :(
              <button
                className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full cursor-pointer"
                type='button'
                // onClick={getAccountAndSigner}
                onClick={handleLogin}
                disabled={isConnectig}
                >
                Connect Wallet
              </button>
            ) }
           
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header