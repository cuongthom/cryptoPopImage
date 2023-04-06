import { Col, Row } from 'antd'
import React from 'react'

function RecentTransactions() {
  return (
    <div>
            <div>
              <p className="pt-6 text-3xl font-bold">Recent Transactions</p>
            </div>
            <Row gutter={{ xs: 4, lg: 8, xl: 16, xxl: 20 }} className="py-10">
              <Col className="gutter-row " span={4}>
                <img
                  className="bg-pink-600 text-center w-full"
                  src="/image/username2.png"
                  placeholder="pop"
                />

                <div className="">
                  <div className="flex justify-between ...">
                    <div className=" text-xl font-bold">Pop</div>
                    <p className="font-bold text-rose-700">#awdasdasd</p>
                  </div>
                  <div className="flex justify-between ...">
                    <div>Owner</div>
                  </div>
                  <div className="flex">
                    <img
                      className="w-6 h-6 pt-1"
                      src="/image/unnamed.png"
                    />
                    <p className="text-black px-2 font-bold text-lg">
                      1231241 BNB
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
  )
}

export default RecentTransactions