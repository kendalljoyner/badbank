function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BadBank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/CreateAccount/">Create Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/deposit/">Deposit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/withdraw/">Withdraw</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Balance/">Balance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/alldata/">All Data</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br/>
    </>
  );
}