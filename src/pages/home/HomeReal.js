// import React, { useState } from 'react';
// import { Link } from '@material-ui/core';
// import Login from '../common/login';
// import './home.css';

// const HomeReal = () => {

//   const [email, setEmail] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // TODO: Implement form submission logic here
//     console.log('Email submitted:', email);
//   };


//     return (
//         <>
//         <div className="container">
//       <header>
//         <nav>
//           <div className="logo">
//             <h1>Nest</h1>
//             <p>MART & GROCERY</p>
            
//           </div>
//           <div className="user-actions">
//             <a href="#">
//               <i className="fas fa-map-marker-alt"></i> Your Location
//             </a>
//             <a href="#">
//               <i className="fas fa-sync-alt"></i> Compare
//             </a>
//             <a href="#">
//               <i className="fas fa-heart"></i> Wishlist
//             </a>
//             <a href="#">
//               <i className="fas fa-shopping-cart"></i> Cart
//             </a>
//               {/* <a href="{{LoginComponent}}">Sign In</a> */}
//               <Link onClick={Login}>sign in</Link>
//           </div>
          
//           <div className="nav-links">
//             <ul>
//               <li>
//                 <a href="#">Browse All Categories</a>
//               </li>
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">Groceries</a>
//               </li>
//               <li>
//                 <a href="#">Electronics</a>
//               </li>
//               <li>
//                 <a href="#">Fashion</a>
//               </li>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Shop</a>
//               </li>
//               <li>
//                 <a href="#">Blog</a>
//               </li>
//               <li>
//                 <a href="#">Contact</a>
//               </li>
//             </ul>
//           </div>
//           <div className="search-bar">
//             <input type="text" placeholder="Search for items..." />
//             <button type="submit">
//               <i className="fas fa-search"></i>
//             </button>
//           </div>
          
//         </nav>
//       </header>
//       <main>
//         <section className="hero">
//           <div className="hero-content">
//             <h2>Don't miss amazing grocery deals</h2>
//             <p>Sign up for the daily newsletter</p>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 value={email}
//                 onChange={handleEmailChange}
//                 required
//               />
//               <button type="submit">Subscribe</button>
//             </form>
//           </div>
//           <div className="hero-image">
//             <img
//               src="/Screenshot 2024-06-18 at 10.57.27 PM.png"
//               alt="Grocery bag with fresh produce"
//             />
//           </div>
//         </section>
//       </main>
//       <footer>
//         <div className="support">
//           <i className="fas fa-headphones-alt"></i>
//           <p>1900-888</p>
//           <p>24/7 Support Center</p>
//         </div>
//       </footer>
//     </div>
//     </>



//         );
//         };
//         export default HomeReal;