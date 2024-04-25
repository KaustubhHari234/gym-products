const Home = () => {
    return (
      <div>
        <div className="nav-bar">
          <div className="logo-container">
            <div className="logo">
              <img src={logo} alt="Logo" style={{ width: '200px' }} />
            </div>
          </div>
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search for any products" />
          </div>
          <div className="button-container">
            <div className="shopping-cart">
              <img src={cartIcon} alt="Cart" style={{ width: '30px' }} /> 
            </div>
            <div className="buttons">
              <a href="login.html" className="button">Log in</a>
              <a href="register.html" className="button">Register</a>
            </div>
          </div>
        </div>
  
        <div className="header">
          <div className="headcontent">
            <a href="home.html" className="headcontent">Our products</a>
            <a href="home.html" className="headcontent">Shop by category</a>
            <a href="home.html" className="headcontent">Shop by goal</a>
            <a href="home.html" className="headcontent">Authenticity</a>
            <a href="home.html" className="headcontent">Reviews</a>
          </div>
        </div>
  
        <div className="main-body">
          <div className="main-image">
            <img src={mainImage} alt="Main" />
          </div>
          <div className="bar1">
            <div className="bar1-content">
              
              <a href="home.html" className="bar1-content">| Buy More && Save more |</a>
            </div>
          </div>
        </div>
  
        <div className="scrolling-text-container">
          <div className="scrolling-text">
            <div className="scrolling-text-item">TRAIN</div>
            <div className="scrolling-text-item">EAT</div>
            <div className="scrolling-text-item">DRINK</div>
            <div className="scrolling-text-item">SLEEP</div>
            <div className="scrolling-text-item">REPEAT</div>
          </div>
        </div>
  
        <div className="our-products">
          <div className="product-text">
            <p className="l1">EXPLORE OUR</p>
            <p className="l2">WIDE RANGE OF</p>
            <p className="l3">PRODUCTS</p>
            <div className="explore-button">
              <button>Explore Now &gt;</button>
            </div>
          </div>
          <div className="product-img">
            <img src={productImage} alt="Product" />
          </div>
        </div>
  
        <div id="page2">
          <div id="cats-text">
            <h2>Pick your Category And Shop</h2>
          </div>
          <div id="categories">
            <div id="category">
              <div className="cat-para">
                <h5>Whey Protein</h5>
                <span>"Explore the best protein for you!!!"</span>
              </div>
              <div className="read-more">
                <a href="home.html">View All &gt;</a>
              </div>
            </div>
            <div id="category">
              <div className="cat-para">
                <h5>Weight Gainers</h5>
                <span>"Grab the best supplements for gaining weight"</span>
              </div>
              <div className="read-more">
                <a href="home.html">View All &gt;</a>
              </div>
            </div>
          </div>
        </div>
  
        <div id="page2">
          <div id="cats-text">
            <h2>Unlesh your Performance and Acheive Goals</h2>
          </div>
          <div id="categories">
            <div id="category">
              <div className="cat-para">
                <h5>Prepare before Traning</h5>
                <span>"Checkout the best Pre-Workout Requirements"</span>
              </div>
              <div className="read-more">
                <a href="home.html">View All &gt;</a>
              </div>
            </div>
          </div>
        </div>
  
        <div id="page3">
          <div className="testimonial">
            <h1>See our Customers Experience</h1>
          </div>
          <div className="quotes">
            <div className="quotation">
              <div className="review">
                <span>"Based on how fast your response was I will never buy from any other company again!"</span>
                <span className="rev-name">Rahul Kumar</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="footer">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
    );
  };
  
  export default Home;