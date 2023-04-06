import {
  useAccount,
  useConnect,
  useContract,
  useNetwork,
  useSigner,
  useSwitchNetwork,
  useDisconnect,
} from "wagmi";
import { GREETING_CONTRACT_ABI, GREETING_CONTRACT_ADDRESS } from "../contracts";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { Dropdown, MenuProps, Space } from "antd";
import { AddressMini } from "../utils";
import { AiOutlineTwitter } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const WalletButton = () => {
  const navigate = useNavigate();
  const { disconnect } = useDisconnect();
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
    const items: MenuProps["items"] = [
      {
        label: <a>My Nfts</a>,
        key: "0",
      },
      {
        label: <a>My Shop</a>,
        key: "1",
      },
  
      {
        // @ts-ignore
        label: <a onClick={disconnect}>Log Out</a>,
        key: "2",
      },
    ];
  return (
    <>
      <header className="bg-black">
        <div className="row mx-20 flex justify-between">
          <div className="col flex py-2">
            <div className="flex pt-1.5 pr-6">
              <Link to="/">
                <img
                  className="w-54 h-9"
                  src="/image/Monnrfys.png"
                  alt="ETH"
                />
              </Link>
            </div>
            <div className="flex px-4 pt-0.5">
              <Link
                to="/NftAllProps"
                className="px-2 py-2 text-lg text-white"
              >
                All Pops
              </Link>
              <Link to="/BuyBox" className="px-8 py-2 text-lg text-white">
                BuyBox
              </Link>
              <Link to="/Attributes" className="pr-8 py-2 text-lg text-white">
                Attributes
              </Link>
              <Link to="/FAQ" className="px-2 py-2 text-lg text-white">
                FAQ
              </Link>
            </div>
          </div>
          <div className="py-2 flex ">
            {connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                {isConnected ? (
                  <p className="text-white text-xl">
                    {AddressMini(address || "nguoidang")}
                  </p>
                ) : (
                  <h2 className="text-white text-lg">Allow Wallet Access</h2>
                )}
              </button>
            ))}
            <div className="py-3 px-8">
              <AiOutlineTwitter className="text-white text-2xl" />
            </div>

            <Dropdown className="h-full" menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <button className="text-white text-xl w-full py-2">
                    <BsPersonCircle className="text-3xl " />
                  </button>
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </header>
    </>
  );
};

export default WalletButton;
