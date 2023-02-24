import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PortfolioLayout, BasicLayout } from "./Layouts";
import { Redirection, Error } from "./Components/Layout";
import { Redirections } from "./Data";

const Home = React.lazy(() => import('./Routes/Home'));
const Harmony = React.lazy(() => import('./Routes/Harmony'));
const Pinewood = React.lazy(() => import('./Routes/Pinewood'));
const ExperimentalImagery = React.lazy(() => import('./Routes/ExperimentalImagery'));
const PartsAndSections = React.lazy(() => import('./Routes/PartsAndSections'));

function Router() {
    const redirections = Redirections().map((redirection, index) => (
        <Route path={redirection.from} element={<Redirection name={redirection.name} url={redirection.to} key={index} />} />
    ));

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PortfolioLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/project">
                        <Route path="/project/harmony" element={<Harmony />} />
                        <Route path="/project/pinewood" element={<Pinewood />} />
                        <Route path="/project/experimental-imagery" element={<ExperimentalImagery />} />
                        <Route path="/project/parts-and-sections" element={<PartsAndSections />} />
                    </Route>
                </Route>
                <Route element={<BasicLayout />}>
                    {redirections}
                    <Route path="*" element={<Error title="404" subtitle="That page could not be found" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;