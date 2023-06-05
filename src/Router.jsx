import { Fragment, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PortfolioLayout, BasicLayout } from "~/Layouts";
import { Redirection, Error } from "~/Components/Layout";
import { Redirections } from "~/Data";

const Home = lazy(() => import('~/Routes/Home'));
const Photi = lazy(() => import('~/Routes/Projects/Photi'));
const Harmony = lazy(() => import('~/Routes/Projects/Harmony'));
const Pinewood = lazy(() => import('~/Routes/Projects/Pinewood'));
const ExperimentalImagery = lazy(() => import('~/Routes/Projects/ExperimentalImagery'));
const PartsAndSections = lazy(() => import('~/Routes/Projects/PartsAndSections'));
const DecisionMaker = lazy(() => import('~/Routes/Apps/DecisionMaker'));
const LoadAssets = lazy(() => import('~/Routes/Admin/LoadAssets'));

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PortfolioLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/project">
                        <Route path="/project/photi" element={<Photi />} />
                        <Route path="/project/harmony" element={<Harmony />} />
                        <Route path="/project/pinewood" element={<Pinewood />} />
                        <Route path="/project/experimental-imagery" element={<ExperimentalImagery />} />
                        <Route path="/project/parts-and-sections" element={<PartsAndSections />} />
                    </Route>
                </Route>
                <Route element={<BasicLayout />}>
                    {
                        Redirections().map((redirection, index) =>
                            <Fragment key={index}>
                                <Route path={redirection.from} element={
                                    <Redirection name={redirection.name} url={redirection.to} />
                                } />
                            </Fragment>
                        )
                    }
                    <Route path="/admin">
                        <Route path="/admin/loadassets" element={<LoadAssets />} />
                    </Route>
                    <Route path="*" element={
                        <Error title="404" subtitle="That page could not be found" />
                    } />
                </Route>
                <Route path="/apps">
                    <Route path="/apps/decisionmaker/:listId?" element={<DecisionMaker />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;