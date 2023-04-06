import type { TabsProps } from "antd";
import { Col, Row, Tabs, Skeleton } from "antd";
import { useState, useEffect, useRef } from "react";
import { AddressMini } from "../../utils";
import { useAccount } from "wagmi";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import "./NftAllProps.css";
function NftAllProps() {
  const [connectTab, setConnectTab] = useState(1);
  console.log("connectTab", connectTab);

  const { connector: activeConnector, isConnected, address } = useAccount();
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <section className="mx-20">
      <div className="flex justify-between py-6">
        <div className="text-base font-bold">Cryptopops | All Pops</div>
        <div className="flex border rounded-md border-black">
          <img
            className="w-12 px-2"
            src="/image/free-search-icon-3076-thumb.png"
          />
          <input
            type="text"
            // onChange={(e: any) => setSearchParams({ search: e.target.value })}
            src="BsSearch"
            className=" w-80 h-8 rounded focus:outline-none"
            placeholder="Search Pops"
          />
        </div>
      </div>
      <div className="text-3xl font-bold py-6 flex justify-between">
        <div>
          <h2>All Pops</h2>
        </div>
        <div className="flex">
          <div className="py-2.5">
            <p className="text-lg">Filter By</p>
          </div>
          <div>
            <Dropdown className="px-4" menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="px-6 border rounded-md border-black">
                  <p>Types</p>

                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="px-6 border rounded-md border-black">
                  <p>Attributes</p>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-12">
        <button
          className={connectTab === 1 ? "focus-bt w-1/4" : "bg-bt-tab w-1/4"}
          onClick={() => setConnectTab(1)}
        >
          <p className="text-xl text-center py-2">On Auction</p>
        </button>
        <button
          className={connectTab === 2 ? "focus-bt w-1/4" : "bg-bt-tab w-1/4"}
          onClick={() => setConnectTab(2)}
        >
          <p className="text-xl text-center py-2">On MarketPlace</p>
        </button>
      </div>
      <hr className="my-4" />
      <div>
        {connectTab === 1 ? (
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="py-2">
            <Col className="gutter-row" span={4} key="">
              <div>
                <img
                  className="bg-image text-center w-full"
                  src="/image/username4.png"
                />
                <div className="py-2">
                  <div className="flex justify-between ...">
                    <div className="font-bold text-lg ">Pop</div>
                    <div className="text-rose-700 text-lg">#1123</div>
                  </div>
                  <div className="flex justify-between ...">
                    <div>Owner</div>
                    {/* <div>ox...132</div> */}
                  </div>
                  <div className="flex">
                    <img
                      className="w-7 h-7 pt-1"
                      src="/image/unnamed.png"
                    />
                    <p className="text-black font-bold px-2 text-lg">123 BNB</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="py-2">
            <Col className="gutter-row" span={4} key="">
              <div>
                <img
                  className="bg-image text-center w-full"
                  src="/image/username2.png"
                />
                <div className="py-2">
                  <div className="flex justify-between ...">
                    <div className="font-bold text-lg ">Pop</div>
                    <div className="text-rose-700 text-lg">#1123</div>
                  </div>
                  <div className="flex justify-between ...">
                    <div>Owner</div>
                    {/* <div>ox...132</div> */}
                  </div>
                  <div className="flex">
                    <img
                      className="w-7 h-7 pt-1"
                      src="/image/unnamed.png"
                    />
                    <p className="text-black font-bold px-2 text-lg">123 BNB</p>
                  </div>
                </div>
              </div>
            </Col>
           

          </Row>
        )}
      </div>
      {/* <Tabs defaultActiveKey="1" items={listItems} onChange={onChange} /> */}
    </section>
  );
}

export default NftAllProps;
