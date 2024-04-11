import React from "react";
import { Route, Routes } from "react-router";

import Home from "./components/Home/Home";
import AnnimationVideoEditing from "./components/Services/AnimationVideoEditing/AnimationVideoEditing";
import AppDevlopment from "./components/Services/AppDevelopment/AppDevelopment";
import AppMarketing from "./components/Services/AppMarketing/AppMarketing";
import GraphicDesigning from "./components/Services/GraphicDesigning/GraphicDesigning";
import PayPerClickAdvertising from "./components/Services/PayPerClickAdvertising/PayPerClickAdvertising";
import SearceEngineOptimization from "./components/Services/SearceEngineOptimization/SearceEngineOptimization";
import SocialMediaManagement from "./components/Services/SocialMediaManagement/SocialMediaManagement";
import UiUxDesignPrototype from "./components/Services/UiUxDesignPrototype/UiUxDesignPrototype";
import WebsiteDevelopment from "./components/Services/WebsiteDevelopment/WebsiteDevelopment";
import AboutUs from "./components/AboutUs/AboutUs";
import Industries from "./components/Industries/Industries";
import RealEstate from "./components/Industries/RealEstate/RealEstate";
import ItAndHealthcare from "./components/Industries/ItAndHealthcare/ItAndHealthcare";
import Finance from "./components/Industries/Finance/Finance";
import Others from "./components/Industries/Others/Others";
import Portfolio from "./components/Resources/Portfolio/Portfolio";
import CaseStudies from "./components/CaseStudy/CaseStudies";
import CaseStudiesInnerPage from "./components/CaseStudy/CaseStudiesInnerPage";
import SeoInIndia from "./components/Resources/Index/SeoInIndia/SeoInIndia";
// import ScrollingSection from "./components/Home/parts/ScrollingSection";
import Blogs from "./components/Resources/Blogs/Blogs";
import BlogsInnerPage from "./components/Resources/Blogs/BlogsInnerPage";
import SeoInBangalore from "./components/Resources/Index/SeoInBangalore/SeoInBangalore";
import SeoInNoida from "./components/Resources/Index/SeoInNoida/SeoInNoida";
import SeoInDelhi from "./components/Resources/Index/SeoInDelhi/SeoInDelhi";
import SeoInJaipur from "./components/Resources/Index/SeoInJaipur/SeoInJaipur";
import SeoInGurgaon from "./components/Resources/Index/SeoInGurgaon/SeoInGurgaon";
import SeoInMumbai from "./components/Resources/Index/SeoInMumbai/SeoInMumbai";
import SeoInPune from "./components/Resources/Index/SeoInPune/SeoInPune";
import SeoInSurat from "./components/Resources/Index/SeoInSurat/SeoInSurat";
import Faq from "./components/Faq/Faq";
import Careers from "./components/Resources/Career/Career";
import Cards from "./components/Home/parts/ScrollingSection";

// import FaQ from "./components/Resources/FaQ/FaQ";
import Ecomerce from "./components/Industries/Ecomerce/Ecomerce";
import Logistics from "./components/Industries/Logistics/Logistics";
import GetInTouch from "./components/GetInTouch/GetInTouch";

const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/app-marketing/" element={<AppMarketing />} />
        <Route
          exact
          path="/animation-video-editing/"
          element={<AnnimationVideoEditing />}
        />
        <Route exact path="/app-development/" element={<AppDevlopment />} />
        <Route
          exact
          path="/graphic-designing/"
          element={<GraphicDesigning />}
        />
        <Route
          exact
          path="/pay-per-click-advertising/"
          element={<PayPerClickAdvertising />}
        />
        <Route
          exact
          path="/search-engine-optimization/"
          element={<SearceEngineOptimization />}
        />
        <Route
          exact
          path="/social-media-management/"
          element={<SocialMediaManagement />}
        />
        <Route
          exact
          path="/ui-ux-design-prototype/"
          element={<UiUxDesignPrototype />}
        />
        <Route
          exact
          path="/website-development/"
          element={<WebsiteDevelopment />}
        />

        <Route exact path="/about-us/" element={<AboutUs />} />
        <Route exact path="/industries/" element={<Industries />} />
        <Route exact path="/e-commerce/" element={<Ecomerce />} />
        <Route
          exact
          path="/real-estate-and-interior-designing/"
          element={<RealEstate />}
        />
        <Route exact path="/it-and-healthcare/" element={<ItAndHealthcare />} />
        <Route
          exact
          path="/logistics-and-immigration/"
          element={<Logistics />}
        />
        <Route exact path="/finance/" element={<Finance />} />
        <Route exact path="/others/" element={<Others />} />

        {/* case study */}
        <Route exact path="/case-studies/" element={<CaseStudies />} />
        <Route exact path="/:slug/" element={<CaseStudiesInnerPage />} />

        {/*  */}

        <Route exact path="/portfolio/" element={<Portfolio />} />

        <Route exact path="/seo-company-india/" element={<SeoInIndia />} />

        <Route
          exact
          path="/seo-company-in-bangalore/"
          element={<SeoInBangalore />}
        />
        <Route exact path="/seo-company-in-noida/" element={<SeoInNoida />} />
        <Route exact path="/seo-company-in-delhi/" element={<SeoInDelhi />} />
        <Route exact path="/seo-company-in-jaipur/" element={<SeoInJaipur />} />
        <Route
          exact
          path="/seo-company-in-gurgaon/"
          element={<SeoInGurgaon />}
        />
        <Route exact path="/seo-company-in-mumbai/" element={<SeoInMumbai />} />
        <Route exact path="/seo-company-in-pune/" element={<SeoInPune />} />
        <Route exact path="/seo-company-in-surat/" element={<SeoInSurat />} />

        <Route exact path="/careers/" element={<Careers />} />
        <Route exact path="/faq/" element={<Faq />} />

        {/* blogs */}
        <Route exact path="/blog/" element={<Blogs />} />
        <Route
          exact
          path="/segmenting-your-customers-for-greater-digital-marketing-success/"
          element={<BlogsInnerPage />}
        />
        <Route
          exact
          path="/how-to-improve-your-site-seo-rankings/"
          element={<BlogsInnerPage />}
        />
        <Route
          exact
          path="/how-to-secure-and-optimize-your-apps-online-visibility/"
          element={<BlogsInnerPage />}
        />

        {/* <Route exact path="/:blogSlug" element={<BlogsInnerPage />} /> */}
        <Route exact path="/app-marketing/" element={<AppMarketing />} />
        <Route exact path="/dummy/" element={<Cards />} />
        <Route exact path="/get-in-touch/" element={<GetInTouch />} />
      </Routes>
    </>
  );
};

export default Main;
