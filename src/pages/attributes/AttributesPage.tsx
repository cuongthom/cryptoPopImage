import { Col, Row } from "antd";
import React from "react";

function AttributesPage() {
  return (
    <section className="mx-20">
      <div className=" py-5">
        <div className="text-base font-bold">Cryptopops | Attributes</div>
        <h2 className="text-3xl font-bold py-8">Types and Attributes</h2>
      </div>

      <div>
        <p className="font-bold text-2xl">Pop Types</p>
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="py-6">
            <Col className="gutter-row " span={6}>
              <div >
                <img src="/image/username2.png"/>
                <p className="text-center text-red-700 text-lg py-2 font-bold">Zombie(194)</p>
              </div>
            </Col>
            
            
          </Row>
        </div>
      </div>
      <div>
        <p className="font-bold text-2xl">Attributes</p>
        <div>
        <Row className="py-6">
       
        <Col className="gutter-row px-0 py-3" span={2}>
              <div >
                <img src="/image/username2.png"/>
                <p className="text-center text-red-700 text-xs py-2 font-bold">Zombie(194)</p>
              </div>
            </Col>
           


            
           
           

            
            
          </Row>
        </div>
      </div>
      {/* <Tabs defaultActiveKey="1" items={listItems} onChange={onChange} /> */}
    </section>
  );
}

export default AttributesPage;
