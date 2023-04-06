import { HomePage, NftAllPropsPage,AttributesPage, TestSCPage, } from "../pages";
import BuyBoxPage from "../pages/buyBox/BuyBoxPage";

const appRoutes = {
    home: {
        path: '/',
        component: HomePage
    },
    nft: {
        path: '/NftAllProps',
        component: NftAllPropsPage
    },
    buyBox: {
        path: '/BuyBox',
        component: BuyBoxPage
    },
    attributes: {
        path: '/Attributes',
        component: AttributesPage
    },
    testSc: {
        path: '/TestSC',
        component: TestSCPage
    }
}

export default appRoutes;