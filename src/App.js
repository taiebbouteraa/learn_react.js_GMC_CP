import './App.css';

function App() {
  return (
<>
    {/* ------------------------------ login start ------------------------------ */}
  <div id="block-1">
    <form className="row g-3" id="block-1-1">
      <div className="mb-3 col-md-6"></div>  
      <div className="mb-3 col-md-2">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
      </div>
      <div className="mb-3 col-md-2">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" className="btn btn-primary mb-3 col-md-2">Log In</button>
    </form>
    {/* ------------------------------ login end ------------------------------ */}

    {/* ------------------------------ block 2 start ------------------------------ */}
  </div>
  <div id="block-2" className="row">
    <div className="ms-auto block-2-1">
      <div className="band-block-inner">
        <h1 id="band-name">
          Anathema
        </h1>
        <h1 id="band-text">
          The best bands in the world
        </h1>
        <p>
        Anathema were a progressive rock band from Liverpool, England. The group was formed in 1990 by Vincent and Daniel Cavanagh, bassist Jamie Cavanagh, drummer/keyboardist John Douglas, and vocalist Darren White.
        </p>
        <button type="button" className="btn btn-light">Music & Entertainment</button>
        <button type="button" className="btn btn-light">Buy Tickets</button>
      </div>
    </div>
  </div>
  {/* ------------------------------ block 2 end ------------------------------ */}

    {/* ------------------------------ upcomig concerts start ------------------------------ */}
    <div id="upcoming-concerts" className="row">
      <div className="col-xl-4 consert-text">
        <h1>
        Upcoming Concerts
        </h1>
        <p>
        Here you can find all upcoming Anathema concerts. If the concert schedule is not right, please contact us below and we will add a gig of Anathema in 2021 or 2022 in our database. <br/> 
        Click Subscribe to track Anathema on My Rock Shows. We'll notify you about new dates!
        </p>
      <button type="button" class="btn btn-dark">Read More</button>
      </div>
      <div className="col-xl-8 consert-img">
        <img src="images/singer.jpg" alt="#"/>
      </div>
    </div>
    {/* ------------------------------ upcomig concerts end ------------------------------ */}
  
  {/* ------------------------------ your message start ------------------------------ */}
  <div id="form-part">
        <form className="needs-validation make-small" novalidate="">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="center-it" for="First-name">First name</label>
                <input type="text" className="form-control" id="First-name" placeholder="First given name" required="" />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please enter a name</div>
              </div>
              <div className="col-md-6 mb-3">
                <label className="center-it" for="Last-name">Last name</label>
                <input type="text" className="form-control" id="Last-name" placeholder="Family name" required="" />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please enter a name</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="center-it" for="validationCustom03">E-mail adress</label>
                <input type="email" className="form-control" id="validationCustom03" placeholder="e-mail@example.eg" required="" />
                <div className="invalid-feedback">Please provide a valid e-mail adress.</div>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-6 mb-3">
                <label className="center-it" for="phone-number">Phone number</label>
                <input type="number" className="form-control" id="phone-number" placeholder="+01 23 456 789" required="" />
                <div className="invalid-feedback">
                  Please provide a valid phone number.
                </div>
                <div className="valid-feedback">
                    Looks good!
                  </div>
              </div>
            <div>
            </div>
            </div>
            <div className="mb-3">
                <label className="center-it" for="validationTextarea">Your message</label>
                <textarea className="col-md-12 form-control" id="validationTextarea" placeholder="Please write you message or comment here" required=""></textarea>
                <div className="invalid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>    
              <div className="form-section">
                <button type="submit" className="btn btn-primary send-form">Send</button>
                </div>
          </form>
    </div>
    {/* ------------------------------ your message end ------------------------------ */}


    {/* ------------------------------ footer start ------------------------------ */} 
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
              <div className="col-12 col-md">
                LOGO
                <small className="d-block mb-3 text-muted">© 2017-2021</small>
              </div>
              <div className="col-6 col-md">
                <h5>Best Hits</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">A simple Mistake</a></li>
                  <li><a className="text-muted" href="#">Flying</a></li>
                  <li><a className="text-muted" href="#">The Storm Before The Calm</a></li>
                  <li><a className="text-muted" href="#">More</a></li>
                </ul>
              </div>
              <div className="col-6 col-md resources">
                <h5>Albums</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">Weather Systems</a></li>
                  <li><a className="text-muted" href="#">The Silent Enigma</a></li>
                  <li><a className="text-muted" href="#">Untouchable/Universal</a></li>
                  <li><a className="text-muted" href="#">More</a></li>
                </ul>
              </div>
              <div className="col-6 col-md about">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">Band</a></li>
                  <li><a className="text-muted" href="#">Locations</a></li>
                  <li><a className="text-muted" href="#">More</a></li>
                </ul>
              </div>
            </div>
          </footer>
          {/* ------------------------------ footer start ------------------------------ */} 
</>
  );
}

export default App;
