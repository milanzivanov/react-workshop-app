function Home() {
  return (
    <div>
      {/* main header */}
      <header className="mainHeader container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <h1>Autokozmetika</h1>
            <p>
              online prodavnica proizvoda za detailing, održavanje, čišćenje i
              zaštitu za automobila
            </p>
            <a href="" className="btn btn-warning">
              Prodavnica
            </a>
          </div>
        </div>
      </header>

      {/* onama */}
      <div className="onama py">
        <div className="container">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7 p-5">
              <h2 className="mb-5">
                Vaša destinacija za profesionalnu autokozmetiku!
              </h2>
              <p>
                Pored same prodaje proizvoda, za cilj imamo da edukujemo naše
                kupce kako bi naše proizvode koristili na pravi način, kako ne
                bi dosli u situaciju da nanesu stetu automoboilima. <br />
                <br />
                Znamo da Vaš automobil nije samo prevozno sredstvo, već deo Vaše
                lične priče.
                <br />
                <br />
                Zato smo pažljivo kreirali kolekciju autokozmetike koja će
                negovati i naglasiti jedinstveni karakter svakog vozila.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
