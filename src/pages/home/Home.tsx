import { Col, Row } from "antd";
import Information from "../../components/information/Information";
import OverallStats from "../../components/overallStats/OverallStats";
import LargestSales from "../../components/largestSales/LargestSales";
import RecentTransactions from "../../components/recentTransactions/RecentTransactions";
import DetailsFAQ from "../../components/detailsFAQ/DetailsFAQ";
import Footer from "../../components/footer/Footer";
const HomePage = () => {
  return (
    <>
      <img src="/image/banner.06d067e1.png" />
      <section className="px-16">
        <Information />
        <OverallStats />
        <div>
          <LargestSales/>
          <RecentTransactions/>
          <DetailsFAQ/>
        </div>
      </section>
    </>
  );
};
export default HomePage;
