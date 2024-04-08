// import { Stack, Typography } from '@mui/material'
// import React from 'react'

// const AppBring = () => {
//   return (
//     <Stack alignItems={"Center"} gap={1} p={"60px 0 80px 0 "}>
//       <Stack alignItems={"center"} width={"54%"} gap={1}>
//         <Typography fontSize={"50px"} fontWeight={"bold"}>
//           What Does it bring to your app?
//         </Typography>
//         <Typography color={"grey"} textAlign={"center"} width={"80%"}>
//           Mobile App marketing brings maximum ROI for your applications. Our
//           Marketing campaigns will help you reach a quality audience with
//           Engaging creatives and activities.{" "}
//         </Typography>
//       </Stack>
//     </Stack>
//   );
// }

// export default AppBring

// import React from "react";
// import {
//   Box,
//   Typography,
//   CssBaseline,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";
// import { styled } from "@mui/system";

// // Creating custom components with styled utility for dynamic styling
// const Section = styled(Box)(({ theme, bgcolor, zindex, top }) => ({
//   textAlign: "center",
//   position: "absolute",
//   width: "100%",
//   height: "100vh",
//   letterSpacing: "4px",
//   overflow: "hidden",
//   clip: "rect(0, auto, auto, 0)",
//   backgroundColor: bgcolor,
//   color: "#fff",
//   top: top,
//   zIndex: zindex,
//   boxShadow: "inset 0 1px 80px rgba(0, 0, 0, 0.14)",
// }));

// const FixedContent = styled(Box)({
//   overflow: "hidden",
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
// });

// // Main component
// const ParallaxBackground = () => {
//   // Apply theme for MUI components if needed
//   const theme = createTheme({
//     typography: {
//       fontFamily: '"Sintony", sans-serif',
//       fontWeight: 300,
//       fontSize: 13,
//       textTransform: "uppercase",
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Section bgcolor="#fff" color="#000" top="0" zindex="1">
//         <FixedContent>
//           <Typography variant="h1" component="div">
//             Parallax Background
//           </Typography>
//           <Typography>No JavaScript, Start scrolling</Typography>
//         </FixedContent>
//       </Section>
//       {/* Repeat for other sections, changing props as necessary */}
//       <Section bgcolor="#c2850a" top="100vh" zindex="2">
//         <FixedContent>
//           <img
//             src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg"
//             alt="Girl in a jacket"
//           />
//         </FixedContent>
//       </Section>
//       {/* Add more sections as per the original HTML structure */}
//       <Typography
//         sx={{
//           color: "#fff",
//           position: "absolute",
//           top: "500vh",
//           left: "50%",
//           transform: "translateX(-50%)",
//         }}
//       >
//         Thanks for watching
//       </Typography>
//     </ThemeProvider>
//   );
// };

// export default ParallaxBackground;



// import React from "react";
// import {
//   Box,
//   Typography,
//   CssBaseline,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";
// import { styled } from "@mui/system";

// // Custom styled components
// const Section = styled(Box)(({ theme, bgcolor, zindex, top }) => ({
//   textAlign: "center",
//   position: "absolute",
//   width: "100%",
//   height: "100vh",
//   letterSpacing: "4px",
//   overflow: "hidden",
//   clip: "rect(0, auto, auto, 0)",
//   backgroundColor: bgcolor,
//   color: "#fff",
//   top: top,
//   zIndex: zindex,
//   boxShadow: "inset 0 1px 80px rgba(0, 0, 0, 0.14)",
// }));

// const FixedContent = styled(Box)({
//   overflow: "hidden",
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
// });

// const images = [
//   "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg",
//   "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg",
//   "https://c4.wallpaperflare.com/wallpaper/131/774/322/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg",
// ];

// // Main component
// const ParallaxBackground = () => {
//   const theme = createTheme({
//     typography: {
//       fontFamily: '"Sintony", sans-serif',
//       fontWeight: 300,
//       fontSize: 13,
//       textTransform: "uppercase",
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Section bgcolor="#fff" color="#000" top="0" zindex="1">
//         <FixedContent>
//           <Typography variant="h1" component="div">
//             Parallax Background
//           </Typography>
//           <Typography>No JavaScript, Start scrolling</Typography>
//         </FixedContent>
//       </Section>
//       {images.map((image, index) => (
//         <Section
//           bgcolor={["#c2850a", "#0a0ac2", "#85c20a"][index]}
//           top={`${(index + 1) * 100}vh`}
//           zindex={index + 2}
//           key={index}
//         >
//           <FixedContent>
//             <img
//               src={image}
//               alt={`Nature ${index + 1}`}
//               style={{ maxWidth: "100%", height: "auto" }}
//             />
//           </FixedContent>
//         </Section>
//       ))}
//       <Typography
//         sx={{
//           color: "#fff",
//           position: "absolute",
//           top: `${(images.length + 1) * 100}vh`,
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: images.length + 2,
//         }}
//       >
//         Thanks for watching
//       </Typography>
//     </ThemeProvider>
//   );
// };

// export default ParallaxBackground;


// import React from "react";
// import {
//   Box,
//   Typography,
//   CssBaseline,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";
// import { styled } from "@mui/system";

// // Custom styled components
// const Section = styled(Box)(({ theme, top }) => ({
//   position: "absolute",
//   width: "100%",
//   height: "100vh",
//   overflow: "hidden",
//   clip: "rect(0, auto, auto, 0)",
//   top: top,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const ImageContainer = styled(Box)({
//   width: "50vw", // 50% of the viewport width
//   height: "50vh", // 50% of the viewport height
//   position: "fixed",
//   top: "25%", // Centers the image vertically
//   left: "25%", // Centers the image horizontally
// });

// const images = [
//   "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg",
//   "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg",
//   "https://c4.wallpaperflare.com/wallpaper/131/774/322/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg",
// ];

// // Main component
// const ParallaxBackground = () => {
//   const theme = createTheme({
//     typography: {
//       fontFamily: '"Sintony", sans-serif',
//       fontWeight: 300,
//       fontSize: 13,
//       textTransform: "uppercase",
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {images.map((image, index) => (
//         <Section top={`${(index + 1) * 100}vh`} key={index}>
//           <ImageContainer>
//             <img
//               src={image}
//               alt={`Nature ${index + 1}`}
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </ImageContainer>
//         </Section>
//       ))}
//       <Typography
//         sx={{
//           color: "#fff",
//           position: "fixed",
//           top: `${(images.length + 1) * 100}vh`,
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: images.length + 2,
//         }}
//       >
//         Thanks for watching
//       </Typography>
//     </ThemeProvider>
//   );
// };

// export default ParallaxBackground;



// import React from "react";
// import {
//   Box,
//   Typography,
//   CssBaseline,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";
// import { styled } from "@mui/system";

// // Custom styled components
// const Section = styled(Box)(({ theme, top }) => ({
//   position: "absolute",
//   width: "100%",
//   height: "100vh",
//   overflow: "hidden",
//   clip: "rect(0, auto, auto, 0)",
//   top: top,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const ImageContainer = styled(Box)({
//   width: "50vw", // 50% of the viewport width
//   height: "50vh", // 50% of the viewport height
//   position: "fixed",
//   top: "25%", // Centers the image vertically
//   left: "25%", // Centers the image horizontally
// });

// const images = [
//   "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg",
//   "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg",
//   "https://c4.wallpaperflare.com/wallpaper/131/774/322/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg",
// ];

// // Main component
// const ParallaxBackground = () => {
//   const theme = createTheme({
//     typography: {
//       fontFamily: '"Sintony", sans-serif',
//       fontWeight: 300,
//       fontSize: 13,
//       textTransform: "uppercase",
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {images.map((image, index) => (
//         <Section top={`${index * 100}vh`} key={index}> {/* Adjusted the top property */}
//           <ImageContainer>
//             <img
//               src={image}
//               alt={`Nature ${index + 1}`}
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </ImageContainer>
//         </Section>
//       ))}
      
//     </ThemeProvider>
//   );
// };

// export default ParallaxBackground;




// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   CssBaseline,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";
// import { styled } from "@mui/system";

// // Custom styled components
// const Section = styled(Box)(({ theme, top }) => ({
//   position: "absolute",
//   width: "100%",
//   height: "100vh",
//   overflow: "hidden",
//   clip: "rect(0, auto, auto, 0)",
//   top: top,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between", // Adjusted for side-by-side layout
// }));

// const ImageContainer = styled(Box)({
//   width: "50vw", // 50% of the viewport width
//   height: "50vh", // 50% of the viewport height
//   position: "fixed",
//   right: "0%", // Align to the right
//   top: "25%", // Centers the image vertically
// });

// const TextContainer = styled(Typography)(({ theme }) => ({
//   position: "fixed",
//   left: "5%", // Align text to the left
//   top: "25%", // Adjust vertically as needed
//   zIndex: 10,
//   transition: "opacity 0.5s ease, transform 0.5s ease",
//   transform: "translateY(-20px)", // Start slightly above to slide down during transition
//   opacity: 0,
//   width: "40%", // Ensure it does not overlap with images
// }));

// const images = [
//   "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg",
//   "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg",
//   "https://c4.wallpaperflare.com/wallpaper/131/774/322/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg",
// ];

// const texts = ["Brand Product 1", "Brand Product 2", "Brand Product 3"]; // Texts corresponding to each image

// // Main component
// const ParallaxBackground = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const index = Math.floor(window.scrollY / window.innerHeight);
//       setActiveIndex(index);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const theme = createTheme({
//     typography: {
//       fontFamily: '"Sintony", sans-serif',
//       fontWeight: 300,
//       fontSize: 13,
//       textTransform: "uppercase",
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {images.map((image, index) => (
//         <Section top={`${index * 100}vh`} key={index}>
//           <ImageContainer>
//             <img
//               src={image}
//               alt={`Nature ${index + 1}`}
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </ImageContainer>
//         </Section>
//       ))}
//       {texts.map((text, index) => (
//         <TextContainer
//           key={index}
//           sx={{
//             opacity: activeIndex === index ? 1 : 0, // Only show the text if its index matches the active index
//           }}
//         >
//           {text}
//         </TextContainer>
//       ))}
//       <Typography
//         sx={{
//           color: "#fff",
//           position: "fixed",
//           top: `${images.length * 100}vh`,
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: images.length + 1,
//         }}
//       >
//         Thanks for watching
//       </Typography>
//     </ThemeProvider>
//   );
// };

// export default ParallaxBackground;






import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";

// Custom styled components
const Section = styled(Box)(({ theme, top }) => ({
  position: "absolute",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  clip: "rect(0, auto, auto, 0)",
  top: top,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const ImageContainer = styled(Box)({
  width: "45vw",
  height: "60vh",
  position: "fixed",
  right: "5%",
  top: "25%",
});

const TextContainer = styled(Typography)(({ theme }) => ({
  position: "fixed",
  left: "5%",
  top: "25%",
  zIndex: 10,
  width: "40%",
  transition: "opacity 0.5s ease, transform 0.5s ease",
  transform: "translateY(-20px)", // Start slightly above to slide down during transition
  opacity: 0, // Start with text invisible
}));

const images = [
  "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg",
  "https://c4.wallpaperflare.com/wallpaper/131/774/322/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg",
];

const texts = [
  {
    title: "Brand Product 1",
    description: "asdasdassd",
  },
  {
    title: "Brand Product 2",
    description: "asdasdasddasdasd",
  },
  {
    title: "Brand Product 3",
    description:"avxzcascasca"
  },
];

// Main component
const ParallaxBackground = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true); // Control visibility to trigger transitions

//   useEffect(() => {
//     const handleScroll = () => {
//       const newIndex = Math.floor(window.scrollY / window.innerHeight);
//       if (newIndex !== activeIndex) {
//         setVisible(false); // First, hide the text
//         setTimeout(() => {
//           setActiveIndex(newIndex);
//           setVisible(true); // Then, after a delay, show the new text
//         }, 500); // This delay should match the CSS transition duration
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeIndex]);



useEffect(() => {
  const handleScroll = () => {
    // Determine the index of the section that is currently 50% visible from bottom to top
    const newIndex = images.findIndex((_, index) => {
      const sectionTop = window.innerHeight * index; // Top position of the current section
      const sectionBottom = sectionTop + window.innerHeight; // Bottom position of the current section
      const scrollMidPoint = window.scrollY + window.innerHeight / 2; // Middle point of the viewport while scrolling

      // Check if the middle point of the viewport is within the current section
      return scrollMidPoint >= sectionTop && scrollMidPoint <= sectionBottom;
    });

    if (newIndex !== activeIndex && newIndex !== -1) {
      setVisible(false); // First, hide the text
      setTimeout(() => {
        setActiveIndex(newIndex);
        setVisible(true); // Then, after a delay, show the new text
      }, 500); // This delay should match the CSS transition duration
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [activeIndex]);

  const theme = createTheme({
    typography: {
      fontFamily: '"Sintony", sans-serif',
      fontWeight: 300,
      fontSize: 13,
      textTransform: "uppercase",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {images.map((image, index) => (
        <Section top={`${index * 100}vh`} key={index}>
          <ImageContainer>
            <img
              src={image}
              alt={`Scene ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ImageContainer>
        </Section>
      ))}

      {texts.map((text, index) => (
        <Section top={`${index * 100}vh`} key={index}>
          <TextContainer
            key={index}
            sx={{
              opacity: visible && activeIndex === index ? 1 : 0,
              transform:
                visible && activeIndex === index
                  ? "translateY(0)"
                  : "translateY(-20px)",
            }}
          >
            <Typography>{text.title}</Typography>
            <Typography>{text.description}</Typography>
          </TextContainer>
        </Section>
      ))}
    </ThemeProvider>
  );
};

export default ParallaxBackground;
