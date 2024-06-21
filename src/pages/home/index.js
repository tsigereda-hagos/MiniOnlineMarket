// import React, { useEffect } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { Route, Switch, useHistory } from "react-router-dom";
// import { authenticationService } from "../../services/authentication.service";
// import { Role } from "../../helpers/role";
// import Orders from "../buyer/orders";
// import Sellers from "../buyer/sellers";
// import { AppBar, Button, Chip, Avatar, Box } from "@material-ui/core";
// import Container from "@material-ui/core/Container";
// import ProductPage from "../common/product-page";


// export default function Home() {
//   const history = useHistory();

//   useEffect(() => {
//     if (authenticationService.currentUserValue) {
//       if (authenticationService.currentUserValue.role === Role.Admin) {
//         history.push("/admin");
//       }
//       if (authenticationService.currentUserValue.role === Role.Seller) {
//         history.push("/seller");
//       }
//       if (authenticationService.currentUserValue.role === Role.Buyer) {
//         history.push("/buyer");
//       }
//     }
//   }, [history]);

//   const redirectToSignup = () => {
//     history.push("/register");
//   };
//   const redirectToLogin = () => {
//     history.push("/login");
//   };

//   return (
//     <body>
      
//       <CssBaseline />
//       <AppBar position="static" id="welcome">
//         <h1>
//           <a id="Wpage">Welcome to Mini Online Market</a> 
//         </h1>
//         {authenticationService.currentUserValue && (
//           <>
//             <Button
//               color="inherit"
//               onClick={() => {
//                 history.push("/buyer/orders");
//               }}
//             >
//               Orders
//             </Button>
//             <Button
//               color="inherit"
//               onClick={() => {
//                 history.push("/buyer/seller");
//               }}
//             >
//               Follow Sellers
//             </Button>
//             <Chip
//               avatar={<Avatar></Avatar>}
//               label={
//                 authenticationService.currentUserValue &&
//                 authenticationService.currentUserValue.username
//               }
//               color="primary"
//             />
//             <br />


//             <Button
//               color="inherit"
//               onClick={() => {
//                 authenticationService.logout();
//                 history.push("/");
//               }}
//             >
//               Sign-Out
//             </Button>
//           </>
//         )}

//         {!authenticationService.currentUserValue && (
//           <div id="buto">
//             <Button
//               onClick={redirectToLogin}
            
//             >
//               Login
//             </Button> <label> </label>

//             <Button
//               onClick={redirectToSignup}
//             >
//               Sign Up
//             </Button>
//           </div>
//         )}
//       </AppBar>

//       <Switch>
//         <Route path="/buyer/orders" component={Orders} />
//         <Route path="/buyer/sellers" component={Sellers} />
//         <Route path="/buyer/products/:id" component={ProductPage} />
//         <Route path="/">
//           <Box component="span" m={1}>
//             <Container maxWidth="md">
//             </Container>
//           </Box>
//         </Route>
//       </Switch>
//     </body>
//   );
// }


import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch , useHistory } from "react-router-dom";
import { authenticationService } from "../../services/authentication.service";
import { Role } from "../../helpers/role";
import Orders from "../buyer/orders";
import Sellers from "../buyer/sellers";
import { AppBar, Button, Chip, Avatar, Box, Modal, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ProductPage from "../common/product-page";
import { Link } from "react-router-dom";
import "./Home.css"; // Make sure to import your CSS file

export default function Home() {
  const history = useHistory();
  const [open, setOpen] = useState(true); // State to control modal visibility

  useEffect(() => {
    if (authenticationService.currentUserValue) {
      if (authenticationService.currentUserValue.role === Role.Admin) {
        history.push("/admin");
      }
      if (authenticationService.currentUserValue.role === Role.Seller) {
        history.push("/seller");
      }
      if (authenticationService.currentUserValue.role === Role.Buyer) {
        history.push("/buyer");
      }
      setOpen(false); // Close modal if user is authenticated
    }
  }, [history]);

  const handleClose = () => {
    setOpen(false);
  };

  const redirectToSignup = () => {
    history.push("/register");
    handleClose();
  };

  const redirectToLogin = () => {
    history.push("/login");
    handleClose();
  };

  const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg'},
    { id: 2, name: 'Product 2', price: 200, image: 'https://images.pexels.com/photos/3662/man-camera-taking-photo-photographer.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Product 3', price: 300, image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUPEhIQEA0PEhIQFxAPEA8PEBAWFxIWFxYVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGisdHx8rLS0tLS0tLS0vKy0tLS0rLS0rLSstLSstNystLTc3LS0tLS0tKy0rLS0tLSstLSsrK//AABEIAJYAlgMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABAUGAQIDBwj/xABNEAABAwICBAYMBw4HAAAAAAABAAIDBBEFEgYHIVETMUFhsbMiMjM1UnFydIGEkaEUI0JTk8HSFRclNENEYmODkqPR4fAkVYKVorLC/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAHxEBAQACAwEAAwEAAAAAAAAAAAECEQMSMUEEITJR/9oADAMBAAIRAxEAPwD7iiIgIi8p5co5z/d0HqiyeKaZUkMgilqWslNuxzBtt193pVgyuzAOBcWkXBD7gjmVe0RteIqqKe+zM8HncVE0gxhlJTvqZHvDIxftjc7gE7Q20CL5dR1GM1Q4f4RHQQv7JkXBmolynaC+5ABtyLzecW4Tg24oHW4z8DiAB3cai8mMNx9VRfF9I9IqyhLG1GMFr5AS1rKBjzYcpsdgVIdZMn+czf7Yz7SmZSm36DRfFcC0ir6xr3U+LF/BWzNfQsY4X4jYni2H2K+p6fFXjMMVHi+BRbP+SjvDb6Yi+Zz4vi9COHlkhxCjZ2UrWxcBUMYONzbEh1hyL6DhWIR1ELKiI5opmh7TzFWll8JUtERSkREQEREBVWLvIzW8Ae8q1VRjHGfJb/2Krl4ivy7jVNI2qlbUZhNncSXXu65O0bweRfZtXJlZRRxy3zAEgO42tLiWg+iyta6jifILhvC2zC7QSADxgkbF841l45PBM2lhe+JmQPc5hIc8uJ5RtsLKu+36V9fX2SnNe1hcct/Ss9rTGaGnjO1klZTNI3gytuFk9VOkFRJI+mne6QMDXNc85nNubWzcq1us7taTz6l60KNaukxc4lPwcTnjjAsPGdgUDBYuxueM7V30ndaEDwntHSpGFCzB4lz5fFIiaQ6H0lfkNRGXOjuGua5zHAHjFxxhUx1R4X81L9PJ/NbuNd7LSW6XZrBNE6WhY5lPGWcIQXOc5z3OtxC55BcrmJ/By2+S/Z/JaCRqosYj5dypfdoqzewEEHaCCCN4Kr9T7j9y2N5I5Z2DmAlcAFNpJM0bXbx71B1Qd7B5xU9c5b8Zi2yIi1XEREBERAVdXxZnEfojpKsVDlPxh5mt6XKuXgz0tK8HtSecbVnNJtFGVmUyRvzsuA9hyuA3X3L6HZcZVn4rpidDdDm0xu1pa2+YlxzPeRxXO5ddZ/FSbvh1L1oW6AWF1nfmnn1L1rVKUvS5vxDTukb9arHaTQ07Q03fLbtGcnjPIpWsKvEVJl/KyuDW81tpd/e9YfA8Pucztrjtudq4+fkmDm5OTr+o1Uel1S/tImNb+lclTocfquVkZ9BC86GkAHErSKALlnPyX6pMs79dqfHr7JGFnONoXpW5Xtu0gg7lyaUHkUWWAx7W9rytXRjyW/01mV+u+BSdi5ngm/tXXVB3tHnFT1zlHw2TLUW+TICvfVAfwbbdUVPXOXbxeNcW3REWy4iIgIiIChP7q7yWf+lNUSRvxhO9relyrl4CLlFmhwsJrO/NPPqXrWreLB6zR+KefUvXNUwU2sp+aoiZyNZf0k/0XTBmAAL11hx/4pjt7B0qLh0ll5n5M3k4eT+mqplPjKpqSoVlHKubG6TjU5rl0mIsvHhF5Tz7Fvjmv2VbZMsrf0Xj2Eqw1Pd7vWKjrnLPuqLyu/09K0Op4fg0HfPUdc5ej+Pd4tuK7jcIiLpaiIiAiIgKLJ258lvS5SlFk7ofJb0uVcvAREWaHSWQBYLWPJmNLx/j1Js/ahbirbsvuWC0/wCOl8+pOuCfRI0/o8zon+Nv1qlhpCAtPj0vDPcwdzhsPG6+1cQ0gsuTmw3XJyY7rPtcWqbT1ynT4eCqiqoS3aFx5YMLuLP4YFAra8W41VTSvCq6udxVccbtHfa3wIGWe3hPaPRe56Fr9UPe0ecVPXOVPqxowRJKR2TSAOa4N1c6oe9vrFT1zl7H481i7+H+W1REW7UREQEREBRZO6HyW9LlKUSXuh8lvS5Vy8HKLhFmgKwms82bSndXUp9koW7WB1qj4um88pusCmeiywWHOxxPHIXH2qbSs7H3Lx0e7QKcW5Xkch7IelZ5zc2x1+nk+NRJ6cFWTgvCQLmzxZ5RnaygG5Z+vowFsqlqzeLLms1XPljppdXdPlpnO8J59wXOqLvb6xU9c5XOjVJwVLG3iJbmPjdtVNqi72+sVPXOXrcU1HfxzUjaoiLVoIiICIiAokvdD5LelylqHN3Q+S3pcq5eAi4RZocrDayxf4IN9dSj+KFuFiNZPHR+f0nWhTPRZYHszM8FxHsKuZ4swuO2b7+ZVDW8HVSM5Cc49O1XcTkk3NM5/iCJfavKR6n1NGH7Qcrt44vSFWT4bPyZDz3sufk48vk2zyxqFWSABUQhMry4DsI9pPITyBaNuj73n414a3wWbSfSpk9GxkeRgs0BU4+C73kpOK27qzwao4SBjuXKAfGNiz2qLvb6xU9c5TNDZewkj8B/uI/ooeqLvb6xU9c5duLqxbVERXWEREBERAUObuh8lvS5TFDm7ofJb0uVcvBwiIs0CxGsjjo/P6TrQtusRrI/M/P6TrQpgvNJIsskc44u5uPvH1qZSS3Cm4hSiWN0Z+UNh3HkKz+FzFpMT9j2HKUjPyr9pXZeTHLvdXWHKFWcRUxxVfiElmkqKVB0R7rPu7D6146ou93rFT1zlP0QgIjfKfyzyR4hsH1qBqi72+sVPXOTAw8bVERXXEREBERAUOr2ODvkkZTzG9x0lTFw4X2HaDyFRZsQ0R+HAm4klYPBaW5R4rgrj7nfrZfbH9lU61DlY3WZQSyUueEZpqeSOoa3wjG8Ot7lsPub+tl/h/ZXV+FAixllI/Z/ZTrRX6OaU01ZEJIpWZ7DPE5wbLE7la5p2ixXOMUbXHhY3N4VvGMw7MbvGq+u1bUEzs8kZc8/K7BpPpDQVGOqjDPmn/SOU9UdVhQ4ow7C4Bw2EEgEKeKtnhN/eCoPvT4X80/6Ryfenwv5p/0jlOjqvJKxg+U394Kolk+Ev4JjgIx277iwG4c68vvT4X80/wCkcg1UYX8y/wCkcnVHVO0k0npqCnyh7HT5ckNPGQ6WV9rNAaNtr2uV7ausIfS4dDDKLTkOkeNznuLiPeu2A6D0FG7hIYGCTke8Nc9viJGxaNTJpaQREUpEREBERAREQEREBERAREQEREBERAREQEREBERB/9k=' },
    { id: 4, name: 'Product 4', price: 400, image: 'data:image/jpeg;base64,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' },
    { id: 5, name: 'Product 1', price: 100, image: 'https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg'},
    { id: 6, name: 'Product 1', price: 100, image: 'https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg'},
    { id: 7, name: 'Product 1', price: 100, image: 'https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg'},
    { id: 8, name: 'Product 1', price: 100, image: 'https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg'},

  ];

  return (
    <>
      <CssBaseline />
      {/* <AppBar position="static" id="welcome">
        <h1>
          <a id="Wpage">Welcome to Mini Online Market</a>
        </h1>
        {authenticationService.currentUserValue && (
          <>
            <Button
              color="inherit"
              onClick={() => {
                history.push("/buyer/orders");
              }}
            >
              Orders
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                history.push("/buyer/sellers");
              }}
            >
              Follow Sellers
            </Button>
            <Chip
              avatar={<Avatar></Avatar>}
              label={
                authenticationService.currentUserValue &&
                authenticationService.currentUserValue.username
              }
              color="primary"
            />
            <br />
            <Button
              color="inherit"
              onClick={() => {
                authenticationService.logout();
                history.push("/");
              }}
            >
              Sign-Out
            </Button>
          </>
        )}

        {!authenticationService.currentUserValue && (
          <div id="buto">
            <Button onClick={redirectToLogin}>Login</Button> <label> </label>
            <Button onClick={redirectToSignup}>Sign Up</Button>
          </div>
        )}
      </AppBar> */}

      <Modal open={open} onClose={handleClose}>
        <div className="modalContent">
          <Typography variant="h4" gutterBottom>
            Welcome to Mini Online Market
          </Typography>
          <Button variant="contained" color="primary" onClick={redirectToLogin}>
            Login
          </Button>
          <Button variant="contained" color="secondary" onClick={redirectToSignup} style={{ marginLeft: "10px" }}>
            Sign Up
          </Button>
        </div>
      </Modal>

      {!authenticationService.currentUserValue && (
        <div className="container">
          <header>
            <nav>
              <div className="logo">
                <h1>Eri</h1>
                <p>MART & GROCERY</p>
              </div>
              <div className="user-actions">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i> Your Location
                </a>
                <a href="#">
                  <i className="fas fa-sync-alt"></i> Compare
                </a>
                <a href="#">
                  <i className="fas fa-heart"></i> Wishlist
                </a>
                <a href="#">
                  <i className="fas fa-shopping-cart"></i> Cart
                </a>
                <Link onClick={redirectToLogin}>Sign in</Link>
              </div>
              {/* <div className="nav-links">
                <ul>
                  <li>
                    <a href="#">Browse All Categories</a>
                  </li>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Groceries</a>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div> */}
              <div className="search-bar">
                <input type="text" placeholder="Search for items..." />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </nav>
          </header>
          <main>
            <section className="hero">
              <div className="hero-content">
                <h2>Don't miss amazing deals</h2>
                <p>Sign up for the daily newsletter</p>
                
                  <div className="Products">
  {products.map(product => (
    <div className="Product-card" key={product.id}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => {
        history.push(`/buyer/products/${product.id}`);
      }}>Add to Cart</button>
    </div>
  ))}
</div>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
              <div className="hero-image">
                <img
                  src="/path/to/your/image.png"
                  alt="Grocery bag with fresh produce"
                />
              </div>
            </section>
          </main>
          <footer>
            <div className="support">
              <i className="fas fa-headphones-alt"></i>
              <p>1900-888</p>
              <p>24/7 Support Center</p>
            </div>
          </footer>
        </div>
      )}

    

      <Switch>
        <Route path="/buyer/orders" component={Orders} />
        <Route path="/buyer/sellers" component={Sellers} />
        <Route path="/buyer/products/:id" component={ProductPage} />
        <Route path="/">
          <Box component="span" m={1}>
            <Container maxWidth="md"></Container>
          </Box>
        </Route>
      </Switch>
    </>
  );
}
