   import Carousel from 'react-multi-carousel';
   import 'react-multi-carousel/lib/styles.css';

   const MyCarousel = () => {
     const carouselConfig = {
       // Configure your carousel options here
       responsive: {
         // Define responsive breakpoints
         desktop: {
           breakpoint: { max: 3000, min: 1024 },
           items: 3,
         },
         tablet: {
           breakpoint: { max: 1024, min: 464 },
           items: 2,
         },
         mobile: {
           breakpoint: { max: 464, min: 0 },
           items: 1,
         },
       },
     };

     const carouselData = [
       // Your carousel data goes here
       { id: 1, title: 'Item 1' },
       { id: 2, title: 'Item 2' },
       { id: 3, title: 'Item 3' },
     ];

     return (
       <Carousel {...carouselConfig}>
         {carouselData.map((item) => (
           <div key={item.id}>{item.title}</div>
         ))}
       </Carousel>
     );
   };

   export default MyCarousel;
