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
import Portfolio from "./components/Resources/Portfolio/Portfolio";
import CaseStudies from "./components/CaseStudy/CaseStudies";

import CaseStudiesInnerPage from "./components/CaseStudy/CaseStudiesInnerPage";
import SeoInIndia from "./components/Resources/Index/SeoInIndia/SeoInIndia";
import Career from "./components/Resources/Career/Career";
import ScrollingSection from "./components/Home/parts/ScrollingSection";
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


const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          exact
          path="/Services/app-marketing"
          element={<AppMarketing />}
        />
        <Route
          exact
          path="/Services/animation-video-editing"
          element={<AnnimationVideoEditing />}
        />
        <Route
          exact
          path="/Services/app-development"
          element={<AppDevlopment />}
        />
        <Route
          exact
          path="/Services/graphic-designing"
          element={<GraphicDesigning />}
        />
        <Route
          exact
          path="/Services/pay-per-click-advertising"
          element={<PayPerClickAdvertising />}
        />
        <Route
          exact
          path="/Services/search-engine-optimization"
          element={<SearceEngineOptimization />}
        />
        <Route
          exact
          path="/Services/social-media-management"
          element={<SocialMediaManagement />}
        />
        <Route
          exact
          path="/Services/ui-ux-design-prototype"
          element={<UiUxDesignPrototype />}
        />
        <Route
          exact
          path="/Services/website-development"
          element={<WebsiteDevelopment />}
        />


        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/industries" element={<Industries />} />
        <Route exact path="/case-studies" element={<CaseStudies />} />
        <Route
          exact
          path="/case-studies/:id"
          element={<CaseStudiesInnerPage />}
        />
        <Route exact path="/portfolio" element={<Portfolio />} />

        <Route exact path="/SEO/India" element={<SeoInIndia />} />

        <Route exact path="/SEO/Bangalore" element={<SeoInBangalore />} />
        <Route exact path="/SEO/Noida" element={<SeoInNoida />} />
        <Route exact path="/SEO/Delhi" element={<SeoInDelhi />} />
        <Route exact path="/SEO/Jaipur" element={<SeoInJaipur />} />
        <Route exact path="/SEO/Gurgaon" element={<SeoInGurgaon />} />
        <Route exact path="/SEO/Mumbai" element={<SeoInMumbai />} />
        <Route exact path="/SEO/Pune" element={<SeoInPune />} />
        <Route exact path="/SEO/Surat" element={<SeoInSurat />} />

        <Route exact path="/Career" element={<Career />} />
        <Route exact path="/Blog" element={<Blogs />} />
        <Route exact path="/Blog/:id" element={<BlogsInnerPage />} />
        <Route
          exact
          path="/Services/app-marketing"
          element={<AppMarketing />}
        />
        <Route exact path="/dummy" element={<ScrollingSection />} />

      </Routes>
    </>
  );
};

export default Main;
