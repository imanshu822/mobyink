import { Stack, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

import blogImg1 from "../../../assests/Logos_blogs Image_Case study image/Ladihya.jpg";
import blogImg2 from "../../../assests/Logos_blogs Image_Case study image/Binoma.jpg";
import blogImg3 from "../../../assests/Logos_blogs Image_Case study image/XM-Trade.jpg";
import blogImg4 from "../../../assests/Logos_blogs Image_Case study image/Octa.jpg";
import blogImg5 from "../../../assests/Logos_blogs Image_Case study image/Iroomit.jpg";
import blogImg6 from "../../../assests/Logos_blogs Image_Case study image/creativehomes.jpg";
import blogImg7 from "../../../assests/Logos_blogs Image_Case study image/Wooden-Owl-Design-Studio.jpg";
import blogImg8 from "../../../assests/Logos_blogs Image_Case study image/Myglobalcityzenship.jpg";
import blogImg9 from "../../../assests/Logos_blogs Image_Case study image/Carryfast.jpg";
import blogImg10 from "../../../assests/Logos_blogs Image_Case study image/Tranont.jpg";
import blogImg11 from "../../../assests/Logos_blogs Image_Case study image/SmartDiet-Planner-Weight-Loss.jpg";
import blogImg12 from "../../../assests/Logos_blogs Image_Case study image/Webmd.jpg";
import blogImg13 from "../../../assests/Logos_blogs Image_Case study image/Moodstooore.jpg";
import blogImg14 from "../../../assests/Logos_blogs Image_Case study image/Elisa.jpg";

const CardSection = () => {
  // Define an array of blog data objects
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [blogsToShow, setBlogsToShow] = useState(9);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const blogData = [
    {
      id: 1,
      slug: "lahdiya",
      img: blogImg1,
      category: "Others",
      BlogContent: {
        heading: "Lahdiya",
        postedBy: "By mobyink",
        date: "December 12, 2023",
        aboutCompany: "About Paysafe​",
        about:
          "La Dihya, a prominent Arabian perfume business, approached us seeking social media marketing services with the primary goal of increasing brand visibility and driving sales growth. By implementing a targeted and comprehensive social media strategy, we were able to achieve outstanding results, ultimately doubling La Dihya's sales figures.",
        head1: {
          title1: "Objectives",
          // bold1: "",
          t1: "Enhance brand visibility and recognition across social media platforms Increase engagement and followers on La Dihya's social media accounts Drive significant growth in sales and revenue.",
        },
        head2: {
          title2: "Approach",
          b1: "Social Media Optimization:",
          t1: "We optimized La Dihya's social media accounts to increase visibility and attract more customers",
          b2: "Strategic Reach Expansion:",
          t2: "Through targeted advertising and collaborations with influencers, we expanded La Dihya's reach to a wider customer base.",
          b3: "Compelling Content Creation:",
          t3: "Our team crafted engaging posts highlighting La Dihya's unique Arabian perfumes and their appeal to the target audience",
        },
        head3: {
          title3: "Conclusion",
          // bold1: "Social Media Optimization:",
          t1: "In conclusion, our tailored social media strategy not only elevated La Dihya's brand visibility and follower base but also delivered exceptional results by doubling their sales figures. It showcases the significant impact of strategic social media marketing in driving business growth and achieving outstanding outcomes.",
          // bold2: "Strategic Reach Expansion:",
          // t2: "Through targeted advertising and collaborations with influencers, we expanded La Dihya's reach to a wider customer base.",
        },
        Result: {
          title: "The Result",
          b1: "Increased Brand Visibility: ",
          t1: "Through our targeted content strategy and optimized social media presence, La Dihya experienced a significant increase in brand visibility. The brand gained recognition among the target audience, leading to enhanced brand awareness",
          b2: "Growth in Follower Base: ",
          t2: "La Dihya's social media accounts witnessed substantial growth in followers and engagement. The compelling content and consistent posting schedule attracted more followers, establishing an active and engaged community around the brand",
          b3: "Doubled Sales Performance: ",
          t3: "The implementation of our social media marketing strategy resulted in a remarkable growth in sales for La Dihya. By effectively reaching and engaging with the target audience, we achieved a doubling of their sales figures, surpassing their initial expectations.",
        },
      },
    },
    {
      id: 2,
      slug: "binomo",
      img: blogImg2,
      category: "Finance",
      BlogContent: {
        heading: "Binomo",
        postedBy: "By mobyink",
        date: "December 12, 2023",
        img: "",
        aboutCompany: "About Binomo​",
        about:
          "Binomo, a leading online trading platform, sought to expand its presence in the Indian market by running a Cost Per Deposit (CPD) and Cost Per Acquisition (CPA) campaign. The campaign aimed to increase brand awareness, attract new traders, and boost trading activity in India.",
        head1: {
          title1: "Challenges:",
          t1: "Entering a competitive market with established players. ",
          t2: "Building trust among Indian traders.",
          t3: "Achieving a high volume of deposits and acquisitions in a cost-effective manner.",
        },
        head2: {
          title2: "Objectives:",
          t1: "Increase the average deposit amount.",
          t2: "Generate a trading volume of 13,200 transactions.",
          t3: "Target the Indian market effectively within a 110-day campaign duration.",
        },
        head3: {
          title3: "Strategy:",
          t1: "Tailored marketing for the Indian market.",
          t2: "Educational content and local support..",
          t3: "Incentives and promotions.",
        },
        head4: {
          title4: "Strategy:",
          t1: "Binomo's targeted CPD & CPA campaign in India was a resounding success, achieving the set objectives within the specified timeframe. By customizing their approach to the Indian market, offering educational content, and providing localized support, Binomo not only attracted a substantial number of traders but also built a strong foundation for long-term growth in the region.",
        },
        Result: {
          title: "The Result",
          t0: "Binomo's CPD & CPA campaign in India achieved impressive results:",
          b1: "1. Average Deposit:",
          t1: "The average deposit amount surpassed expectations, reaching $113, indicating a high level of engagement and commitment from Indian traders.",
          b2: "2. Trading Volume: ",
          t2: "Binomo successfully generated a trading volume of 13,200 transactions, meeting its target within the 110-day campaign duration.",
          b3: "3. Market Penetration: ",
          t3: "The campaign significantly increased Binomo's visibility and trust within the Indian market, allowing them to compete effectively with established players.",
        },
      },
    },
    {
      id: 3,
      slug: "xm-trading",
      img: blogImg3,
      category: "Finance",
      BlogContent: {
        heading: "XM Trading",
        postedBy: "By mobyink",
        date: "December 12, 2023",
        img: "",
        aboutCompany: "About XM Trading",
        about:
          "XM™, a leading provider of online trading services, embarked on a mission to enhance its mobile trading experience for clients. They sought to achieve significant growth in app installs, improve keyword rankings on app stores, and optimize the overall user experience.",
        head1: {
          title1: "Challenges:",
          t1: "Low app installs and limited user engagement.",
          t2: "Inadequate visibility on app stores due to poor keyword rankings.",
          t3: "Fierce competition in the online trading industry.",
        },
        head2: {
          title2: "Objectives:",
          t1: "Increase app installs and user engagement.",
          t2: "Improve keyword rankings on app stores.",
          t3: "Optimize the app store presence for maximum visibility.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "XM™'s commitment to improving the user experience, combined with an effective ASO strategy and content marketing, led to outstanding results. With 500% keywords growth and top rankings for key search terms in just 12 weeks, XM™ not only achieved its objectives but also cemented its position as a leader in the online trading industry.",
        },

        Result: {
          title: "The Result",
          t0: "In just 12 weeks, XM™ achieved remarkable results:",
          b1: "1. App Installs: ",
          t1: "The user-friendly app design led to a significant increase in app installs, surpassing their initial target.",
          b2: "2. Keywords Growth: ",
          t2: "The proper keyword research and ASO implementation resulted in a staggering 500% growth in targeted keywords within 3 months.",
          b3: "3. Keyword Rankings: ",
          t3: "Three critical keywords essential for XM™'s app visibility ranked at impressive positions - number 2, 3, and 5 on app stores. This remarkable achievement placed XM™ at the forefront of their industry.",
        },
      },
    },
    {
      id: 4,
      slug: "octafx",
      img: blogImg4,
      category: "Finance",
      BlogContent: {
        heading: "Octafx",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About Octafx",
        about:
          "Octafx, a prominent player in the online trading and CFD sector, aimed to boost user engagement and deposits in the Indian market.",
        head1: {
          title1: "Objectives:",
          t1: "Increase User Engagement, Boost Average Deposits and Expand Market Reach",
        },
        head2: {
          title2: "Approach::",
          b1: "Targeted Advertising:",
          t1: "Utilized digital advertising channels to target potential traders in India, focusing on those showing interest in financial markets and trading.",
          b2: "Incentivization Strategies:",
          t2: "Implemented strategies to encourage downloads and initial deposits, including bonuses and introductory offers.",
          b3: "Performance Tracking:",
          t3: "Monitored user engagement and deposit patterns to optimize the campaign for better performance and higher ROI.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "The CPD and CPA campaign for Binomo in India was a resounding success, achieving its objectives of increasing user engagement, boosting average deposit values, and expanding market reach. The strategic approach in targeting, incentivization, and performance tracking played a crucial role in driving high-quality user acquisition and enhanced trading activity on the platform. This case study demonstrates the effectiveness of tailored financial marketing strategies in the competitive world of online trading and CFDs.",
        },

        Result: {
          title: "The Result",
          b1: "User Engagement: ",
          t1: "Successfully attracted a significant number of new users to the Binomo platform, with an emphasis on quality leads likely to engage in active trading.",
          b2: "Increased Deposits: ",
          t2: "The average deposit amount rose to $113, indicating a higher level of commitment from new users.",
          b3: "Market Penetration:",
          t3: "Successfully expanded Binomo's user base in the Indian market, with a total trading volume reaching 13,200 over the 110-day campaign period.",
        },
      },
    },
    {
      id: 5,
      slug: "iroomit",
      img: blogImg5,
      category: "Real Estate & Interior Designing",
      BlogContent: {
        heading: "iROOMit",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About iROOMit",
        about:
          "iROOMit is not just a platform for finding roommates and renting rooms; it's a unique connector of people, whether they're newcomers in a city or locals seeking a new environment. The challenge was to elevate iROOMit's digital presence across various channels to connect with a broader audience.",
        head1: {
          title1: "Objectives:",
          t1: "Application ASO, User Acquisition, Website SEO, Google Search Campaigns, Google Lead Generation Campaigns and  Social Media Marketing",
        },
        head2: {
          title2: "Approach:",
          b1: "ASO and SEO Implementation:",
          t1: "Conducted thorough keyword research and optimization to enhance visibility in app stores and search engines.",
          b2: "Targeted App Install Campaigns:",
          t2: "Developed and executed strategic campaigns focused on user acquisition.",
          b3: "Google Search and Lead Generation Campaigns:",
          t3: "Utilized Google's advertising network for targeted search campaigns and lead generation.",
          b4: "Social Media Strategy:",
          t4: "Crafted and implemented a comprehensive social media marketing strategy to engage with the target audience and build brand awareness.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "The strategic digital marketing initiatives undertaken for iROOMit resulted in remarkable improvements in app and website visibility, user acquisition, and keyword rankings. This multi-faceted approach not only enhanced iROOMit's presence in a competitive market but also established a solid foundation for continued growth and user engagement in the realm of roommate finding and room rentals.",
        },

        Result: {
          title: "The Result",
          b1: "Keywords Rank Growth:",
          t1: "Achieved a 450% increase in keyword rankings, significantly boosting online visibility.",
          b2: "Top 10 Rankings: ",
          t2: "Within just 7 weeks, 4 key keywords started ranking in the top 10 positions.",
          b3: "Enhanced App and Website Visibility:",
          t3: "The combined efforts in ASO, SEO, and targeted campaigns led to a substantial increase in app installs and website traffic",
        },
      },
    },
    {
      id: 6,
      slug: "creative-homes",
      img: blogImg6,
      category: "Real Estate & Interior Designing",
      BlogContent: {
        heading: "Creative Homes",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About Creative Homes",
        about:
          "Creative Homes, a prominent real estate company. Seeking to enhance their online presence, attract more customers, and boost sales, Creative Homes engaged our social media services and paid advertising expertise. Through a comprehensive approach that included strategic promotional posts, targeted advertising campaigns, and a data-driven approach, we achieved remarkable results, driving a significant 45% increase in sales within a single month.",
        head1: {
          title1: "Objectives:",
          t1: "Enhance Creative Homes' brand visibility and awareness on social media platforms. Create compelling and engaging promotional posts to attract potential customers. Drive substantial sales growth and increase revenue through targeted advertising campaigns.",
        },
        head2: {
          title2: "Approach:",
          b1: "Social Media Promotion:",
          t1: "We created compelling and visually appealing posts to attract potential customers and increase sales for Creative Homes.",
          b2: "Paid Advertising Campaigns:",
          t2: "Utilizing social media platforms' advertising capabilities, we implemented targeted paid campaigns to reach a broader audience and drive conversions",
          b3: "Enhanced Visibility:",
          t3: "Our strategies focused on increasing brand visibility, engagement, and interactions on social media platforms",
          b4: "Organic Traffic Generation:",
          t4: "By optimizing content and utilizing effective marketing techniques, we drove organic traffic to Creative Homes' social media accounts.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "Our strategic blend of social media promotion and targeted paid advertising for Creative Homes resulted in a significant 100% increase in sales. This approach effectively enhanced the brand's online visibility and engagement, demonstrating the impactful combination of organic and paid marketing tactics in driving growth in the real estate industry.",
        },

        Result: {
          title: "The Result",
          b1: "Sales Growth:",
          t1: "The combination of strategic social media promotion and paid advertising campaigns resulted in an impressive 100% increase in sales for Creative Homes.",
          b2: "Improved Visibility:",
          t2: "Our targeted social media promotion and paid advertising efforts expanded Creative Homes' brand visibility and engagement, reaching a wider audienceW",
          b3: "Increased Organic Traffic:",
          t3: "Through effective marketing strategies and compelling content, we generated a substantial increase in organic traffic to Creative Homes' social media accounts.",
        },
      },
    },
    {
      id: 7,
      slug: "wooden-owl-design",
      img: blogImg7,
      category: "Real Estate & Interior Designing",
      BlogContent: {
        heading: "Wooden owl Design",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About Wooden owl Design",
        about:
          "Wooden Owl Design, a prominent furniture manufacturer. Seeking to enhance brand visibility and attract a wider audience, Wooden engaged our services for social media marketing. Through an effective social media strategy, we were able to significantly increase their social media reach and generate valuable organic traffic, resulting in a substantial growth in brand awareness and customer engagement.",
        head1: {
          title1: "Objectives:",
          t1: "Amplify the reach and visibility of Wooden Owl's social media accounts",
          t2: "Increase the number of followers on Wooden Owl's social media platforms",
          t3: "Drive organic traffic to the Wooden Owl’s website for increased sales opportunities.",
        },
        head2: {
          title2: "Approach:",
          b1: "Targeted Content:",
          t1: "We curated visually appealing posts showcasing Wooden Owl's furniture, emphasizing unique features and craftsmanship",
          b2: "Audience Targeting:",
          t2: "Thorough research helped us refine our targeting strategies, reaching the most relevant audience segments",
          b3: "Compelling Visuals:",
          t3: "Eye-catching images and captions showcased Wooden Owl's furniture in various settings, captivating the audience",
          b4: "Strategic Hashtags:",
          t4: "We used industry-specific and trending hashtags to increase content discoverability and reach.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "The social media strategy executed for Wooden Owl Design successfully enhanced their online visibility and audience engagement. Our targeted approach led to a significant increase in social media reach and followers, and a notable boost in organic website traffic. This campaign effectively demonstrated the impact of tailored social media marketing in growing brand awareness and engagement in the furniture industry",
        },

        Result: {
          title: "The Result",
          b1: "AD Expanded Reach:",
          t1: "Our efforts led to a significant increase in Wooden Owl's social media reach, generating more impressions and a broader audienceD",
          b2: "Follower Growth:",
          t2: "Wooden Owl's follower base experienced notable growth, attracting an engaged community interested in furniture and designD",
          b3: "Increased Organic Traffic:",
          t3: "Targeted content and strategic hashtag usage drove a substantial boost in organic traffic, fostering engagement and potential conversions.",
        },
      },
    },
    {
      id: 8,
      slug: "my-global-citizen-ship",
      img: blogImg8,
      category: "	Logistics & Immigration",
      BlogContent: {
        heading: "My Global Citizen Ship",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About My Global Citizen Ship",
        about:
          "SEO Enhancement for MyGlobalCitizenship Client: MyGlobalCitizenship's journey to amplify its online presence in the niche market of citizenship-by-investment and residency-by-investment services. Focusing on a strategic SEO campaign, the objective was to enhance their digital visibility, attract the right audience, and establish the consultancy as a leading authority in this specialized sector. ",
        head1: {
          title1: "Objectives:",
          t1: "To boost MyGlobalCitizenship's online visibility and search engine rankings to attract more clients.",
        },
        head2: {
          title2: "Approach:",
          b1: "SEO Audit and Strategy:",
          t1: "Conducted a comprehensive SEO audit and developed a customized strategy focusing on industry-specific keywords.",
          b2: "On-Page Optimization:",
          t2: "Enhanced website content, meta tags, and technical SEO aspects.",
          b3: "Content Creation:",
          t3: "Regularly updated the blog with relevant, authoritative content",
          b4: "Backlink Strategy:",
          t4: "Built high-quality links from authoritative sites in related sectors.",
          b5: "Local SEO:",
          t5: "Optimized for local search queries to target specific regions.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "The focused SEO strategy for MyGlobalCitizenship significantly enhanced their online presence, leading to a substantial increase in both website traffic and client inquiries. By improving keyword rankings and establishing a stronger online authority, the campaign effectively expanded its reach in the citizenship and residency consultancy market.",
        },

        Result: {
          title: "The Result",
          b1: "Organic Traffic Increase:",
          t1: "Achieved a 70% increase in organic website traffic.",
          b2: "Keyword Ranking Improvement:",
          t2: "Secured top 5 rankings for several targeted keywords.",
          b3: "User Engagement:",
          t3: "Reduced the website's bounce rate by 30%.",
          b4: "Client Inquiry Growth:",
          t4: "Saw a 50% increase in client inquiries through the website.",
        },
      },
    },
    {
      id: 9,
      slug: "carry-fast",
      img: blogImg9,
      category: "	Logistics & Immigration",
      BlogContent: {
        heading: "Carry Fast",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About Carry Fast",
        about:
          "CarryFast Group, a prominent logistics and supply chain solutions provider.",
        head1: {
          title1: "Objectives:",
          t1: "To enhance CarryFast Group's brand identity and amplify digital engagement through strategic branding and social media marketing.",
        },
        head2: {
          title2: "Approach:",
          b1: "Brand Strategy Development:",
          t1: "Conducted a comprehensive analysis of CarryFast's market position to formulate an effective branding strategy.",
          b2: "Visual Branding:",
          t2: "Undertook a complete redesign of the logo and standardized the visual theme across all digital platforms.",
          b3: "Social Media Marketing:",
          t3: "Executed a targeted social media strategy, focusing on platforms with the highest engagement from CarryFast’s audience.",
          b4: "Content Creation and Distribution:",
          t4: "Developed and disseminated diverse content, including articles and infographics, across multiple channels.",
          b5: "Engagement and Community Building:",
          t5: "Enhanced community interaction and responsiveness on social media platforms.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "The strategic branding and social media marketing efforts for CarryFast Group led to a substantial enhancement in their brand presence and online engagement. These initiatives not only solidified their position in the logistics industry but also set the stage for sustained growth and digital interaction, as evidenced by the impressive improvement in key performance metrics",
        },

        Result: {
          title: "The Result",
          b1: "Enhanced Brand Identity:",
          t1: "Achieved a 35% increase in brand recognition through the revamped visual branding and strategy.",
          b2: "Increased Digital Engagement:",
          t2: "Social media followers grew by 50%, with a 40% increase in overall engagement rates.",
          b3: "Improved Online Visibility:",
          t3: "Website traffic surged by 60%, with a significant improvement in search engine rankings due to optimized content marketing.",
          b4: "Positive Customer Feedback:",
          t4: "Customer satisfaction scores rose by 25%, reflecting a stronger brand perception and service approval.",
        },
      },
    },
    {
      id: 10,
      slug: "tranont",
      img: blogImg10,
      category: "	IT & Healthcare",
      BlogContent: {
        heading: "Tranont",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About Tranont",
        about:
          "Tranont is a prominent healthcare product company. Our objective was to develop their website and implement effective Search Engine Optimization (SEO) strategies to generate substantial traffic. Through our expertise and collaborative efforts, we achieved remarkable results, positioning Tranont for growth and success.",

        head2: {
          title2: "Approach:",
          b1: "Website Development:",
          t1: "Our team of skilled developers designed and developed a visually appealing and user-friendly website for Tranont. We focused on creating a seamless user experience, incorporating intuitive navigation, engaging visuals, and clear product information. The website's structure and design were optimized to drive conversions and encourage visitors to explore the range of healthcare products offered by Tranont",
          b2: "Search Engine Optimization (SEO)",
          t2: "We conducted extensive keyword research and implemented an effective SEO strategy to improve Tranont's organic search rankings. Our approach included optimizing on-page elements, such as meta tags, headers, and content, to ensure high visibility in search engine results pages (SERPs). Additionally, we built high-quality backlinks and leveraged content marketing techniques to enhance Tranont's online authority and credibility.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "The comprehensive website development and targeted SEO strategies implemented for Tranont significantly boosted its online presence, leading to over 10,000 monthly visitors and improved search engine rankings. This dual approach not only enhanced their visibility in the competitive healthcare product industry but also elevated their brand awareness and credibility. As a result, Tranont successfully expanded its customer base and positioned itself for continued growth and success in the digital marketplace",
        },

        Result: {
          title: "The Result",
          b1: "Increased Website Traffic:",
          t1: "Through the implementation of effective SEO strategies and the development of a user-friendly website, we successfully generated over 10,000 monthly visitors to Tranont's website. This substantial increase in traffic significantly expanded their online reach and potential customer base",
          b2: "Improved Search Engine Rankings:",
          t2: "Our targeted SEO efforts resulted in higher search engine rankings for Tranont's relevant keywords. This increased their visibility and prominence in organic search results, enabling them to stand out among their competitors and capture valuable organic traffic",
          b3: "Enhanced Brand Awareness and Online Presence:",
          t3: "The combination of an aesthetically pleasing website and optimized SEO efforts improved Tranont's brand visibility and recognition. They experienced increased brand awareness, gaining credibility within the healthcare product industry and attracting a larger audience of potential customers.",
        },
      },
    },
    {
      id: 11,
      slug: "smart-diet-planner",
      img: blogImg11,
      category: "	IT & Healthcare",
      BlogContent: {
        heading: "Smart Diet planner",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About Smart Diet planner",
        about:
          "SmartDiet Planner, an AI-powered diet planning app, to maximize their app's performance through App Store Optimization (ASO) and targeted app install campaigns. Seeking increased visibility and user adoption, SmartDiet Planner sought our assistance. Through strategic efforts, we achieved outstanding results, driving app installs and revolutionizing the way users approach diet planning.",

        head2: {
          title2: "Approach:",
          b1: "ASO Optimization:",
          t1: "Thorough keyword research and app store listing optimization improved SmartDiet Planner's visibility and search ranking",
          b2: "Engaging Creatives:",
          t2: "Eye-catching app store visuals effectively communicated the benefits of AI-powered diet planning to captivate potential users",
          b3: "Targeted Install Campaigns:",
          t3: "Precise marketing campaigns across digital channels attracted health-conscious individuals interested in personalized diet planning.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "The strategic combination of App Store Optimization and targeted marketing campaigns for SmartDiet Planner led to a significant increase in app visibility and installs, establishing a robust user base. This approach not only enhanced the app's market presence but also fostered sustained user engagement and satisfaction, demonstrating the power of integrating technical optimization with creative advertising in the competitive app marketplace",
        },

        Result: {
          title: "The Result",
          b1: "Enhanced Visibility:",
          t1: "ASO efforts significantly increased SmartDiet Planner's app visibility in app store search results",
          b2: "Increased App Installs:",
          t2: "Targeted campaigns resulted in a notable surge in quality app installs and expanded the user base",
          b3: " Personalized Experience:",
          t3: "SmartDiet Planner's AI-powered features delivered personalized diet plans, receiving positive. user feedback and enhancing overall satisfaction.",
        },
      },
    },
    {
      id: 12,
      slug: "web-md-symptom-checker",
      img: blogImg12,
      category: "	IT & Healthcare",
      BlogContent: {
        heading: "Web Md Symptom Checker",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About Web Md Symptom Checker",
        about:
          "WebMD, a leading healthcare app, to optimize its app performance and drive user acquisition. WebMD approached us with the goal of increasing app installs, improving application ASO, and executing an effective user acquisition campaign. Through our comprehensive strategies and expertise, we achieved remarkable results, revolutionizing WebMD's healthcare app performance in a highly competitive market.",

        head2: {
          title2: "Approach:",
          b1: "App Installs:",
          t1: "Through targeted digital marketing efforts and compelling ad creatives, we attracted a significant number of app installs. Real-time optimization maximized impact and ROIO",
          b2: "Application ASO:",
          t2: "We optimized app metadata, including keywords and descriptions, to improve visibility in app stores. This led to higher app rankings and increased organic downloads",
          b3: "User Acquisition Campaign:",
          t3: "Precise audience targeting, engaging ad formats, and persuasive messaging resulted in a surge of new users. App engagement and growth were significantly enhanced.",
        },
        head3: {
          title3: "Conclusion:",
          t1: "Our strategic campaign for WebMD's healthcare app significantly enhanced its market presence, achieving a 450% increase in keyword rankings and securing the top 10 positions for key terms within 5 weeks. This multifaceted approach, combining targeted digital marketing, App Store Optimization, and user acquisition tactics, led to a surge in app installs and user engagement.",
        },

        Result: {
          title: "The Result",
          b1: "Keywords Rank Growth:",
          t1: "Achieved a remarkable 450% increase in keyword rankings, boosting visibility and discoverability",
          b2: "Top 10 Rankings:",
          t2: "Within 5 weeks, 8 strategically chosen keywords started ranking in the top 10, driving organic traffic and user Acquisition",
          b3: "Enhanced App Performance:",
          t3: "The combined efforts led to improved app performance, user engagement, and positive feedback.",
        },
      },
    },
    {
      id: 13,
      slug: "mood-store",
      img: blogImg13,
      category: "E-Commerce",
      BlogContent: {
        heading: "Mood Store",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About Mood Store",
        about:
          "Highlighting the digital transformation of Mooodstore, a Saudi Arabian enterprise specializing in the latest electronic products. Focus on the store's commitment to offering cutting-edge technology and consumer electronics.",

        head1: {
          title1: "ApproaClient Backgroundch:",
          t1: "Mooodstore is a Saudi-based retail hub for electronic goods.",
          t2: "Offers a diverse range of the latest gadgets and tech appliances.",
          t3: "consumers looking for quality and innovation",
        },
        head2: {
          title2: "Challenge",
          t1: "Mooodstore faced lower online traffic and struggled with converting views into sales. The competitive market for electronic goods demanded a strong digital advertising presence. It required a strategy to boost online visibility and improve sales figures.",
        },
        head3: {
          title3: "Our Solution",
          t1: "Revamped Google Ads campaigns to target the tech-oriented consumer base. Optimized ad placements and keywords specific to the electronic products market.",
        },
        head4: {
          title4: "Ads Focus",
          t1: "The refined Google Ads strategy led to a 40% increase in clicks with a 50% reduction in costs. Enhanced shopper engagement, with the Average Order Value (AOV) rising by 38%. Net ROAS improved to 7 times the ad spend. Specific results included a tripling of Google ROAS and a 5.4x increase in Meta ROAS.",
        },
        head5: {
          title5: "Conclusion",
          t1: "Mooodstore's investment in tailored Google Ads campaigns translated into substantial online growth. The store now shows how targeted digital marketing can lead to remarkable results in the competitive electronics market. Mooodstore's case reinforces the value of strategic online advertising in expanding its reach and driving sales in the tech retail industry.",
        },

        Result: {
          title: "The Result",
          t1: "Mooodstore experienced a marked improvement in both traffic and conversion rates. The strategic ad campaigns effectively attracted and retained customers interested in electronic products.",
        },
      },
    },

    {
      id: 14,
      slug: "elisa-fashion",
      img: blogImg14,
      category: "	E-Commerce",
      BlogContent: {
        heading: "Elisa Fashion",
        postedBy: "By mobyink",
        date: "November 25, 2023",
        img: "",
        aboutCompany: "About Elisa Fashion",
        about:
          "Unveiling the digital marketing success story of Elisa Fashion, a purveyor of trendy and exclusive teenage fashion. Emphasizing their niche in providing unique fashion options for the discerning teenage demographic.",

        head1: {
          title1: "Client Background",
          t1: "Elisa Fashion stands as a distinctive Belgian boutique for teenage fashion.",
          t2: "Specializes in offering exclusive, trendsetting apparel for teenagers seeking individuality in style. Committed to capturing the essence of teenage fashion through a curated selection of clothes.",
        },
        head2: {
          title2: "Challenge",
          t1: "Elisa Fashion grappled with low online engagement and a need for improved digital reach. The niche market for exclusive teenage apparel required a more effective online marketing approach. The challenge was to increase traffic and convert that traffic into tangible sales growth.",
        },
        head3: {
          title3: "Our Solution",
          t1: "We deployed a sophisticated Google Ads campaign tailored to Elisa Fashion's unique brand and audience.",
          t2: "The campaign was structured to enhance online discoverability and attract the boutique's target demographic.",
        },
        head4: {
          title4: "Ads Focus",
          t1: "The Google Ads refinement resulted in a 50% surge in click rates, alongside a 50% cost reduction.",
          t2: "Shopper engagement intensified, with the Average Order Value (AOV) increasing by 40%.",
          t3: "Net ROAS soared to 5.6 times the initial ad spend.",
          t4: "Achieved a threefold rise in Google ROAS and a 5.2x growth in Meta ROAS.",
        },
        head5: {
          title5: "Conclusion",
          t1: "The strategic Google Ads initiative propelled Elisa Fashion to new heights in the online retail space for teenage fashion. This success story exemplifies the power of targeted digital advertising in enhancing market presence and driving sales for niche fashion segments. Elisa Fashion has now set a benchmark for leveraging digital marketing within the exclusive teenage fashion industry.",
        },

        Result: {
          title: "The Result",
          t1: "Elisa Fashion witnessed a notable boost in both website traffic and shopper interaction. The targeted ad strategy led to a significant rise in sales, confirming the efficacy of the campaign.",
        },
      },
    },
  ];

  const handleShowMoreBlogs = () => {
    setBlogsToShow((prevBlogsToShow) => prevBlogsToShow + 9);
  };

  return (
    <Stack width={"100%"} mt={10} boxSizing={"border-box"}>
      <Stack
        width={{
          xs: "90%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack>
          <Typography fontSize={"40px"} textAlign={"center"}>
            Featured Case Studies
          </Typography>
        </Stack>
        <Stack
          mt={5}
          direction={{
            xs: "column",
            md: "row",
            lg: "row",
          }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={5}
        >
          {blogData
            .slice(0, showAllBlogs ? blogData.length : blogsToShow)
            .map((blog) => (
              <Stack
                width={{
                  xs: "100%",
                  md: "45%",
                  lg: "30%",
                }}
              >
                <Link
                  key={blog.id}
                  to={`/${blog.slug}/`}
                  style={{ textDecoration: "none" }}
                  onClick={handleClick}
                >
                  <Stack
                    boxShadow={"0 0 10px 0 rgba(0,0,0,.15)"}
                    height={"100%"}
                    borderRadius={"10px"}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      p={2}
                      justifyContent={"space-between"}
                      gap={1}
                    >
                      <Stack height={"50%"}>
                        <Box
                          component="img"
                          width={"100%"}
                          height={"100%"}
                          src={blog.img}
                        />
                      </Stack>
                      <Stack height={"50%"}>
                        <Stack gap={2}>
                          <Typography
                            fontSize={"12px"}
                            color={"black"} // Move color style here
                          >
                            {blog.category}
                          </Typography>
                          <Typography
                            fontSize={"24px"}
                            fontWeight={"bold"}
                            color={"black"} // Move color style here
                          >
                            {blog.BlogContent.heading}
                          </Typography>
                          <Typography color={"black"}>
                            {blog.BlogContent.about.length > 150
                              ? blog.BlogContent.about.slice(0, 150) + "..."
                              : blog.BlogContent.about}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack direction={"row"} gap={0.5}>
                        <Typography
                          alignSelf={"center"}
                          fontSize={"14px"}
                          fontWeight={"bold"}
                        >
                          Read More
                        </Typography>
                        <ArrowRightAltIcon />
                      </Stack>
                    </Stack>
                  </Stack>
                </Link>
              </Stack>
            ))}
        </Stack>
        {!showAllBlogs && blogsToShow < blogData.length && (
          <Stack
            margin={"0 auto"}
            mt={10}
            width={"200px"}
            bgcolor={"#0D6EFD"}
            borderRadius={"8px"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#0B5ED7",
              },
            }}
          >
            <Typography
              p={2}
              color={"white"}
              textAlign={"center"}
              variant="contained"
              onClick={handleShowMoreBlogs}
            >
              Show More Studies
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default CardSection;
