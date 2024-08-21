function Guide() {
  const items = [
    {
      id: 1,
      title: "Istražite našu kolekciju",
      description: `Pregledajte našu široku ponudu autokozmetičkih proizvoda.
            Kategorizovani proizvodi za lako pretraživanje: od zaštite boje do
            brze nege.`
    },
    {
      id: 2,
      title: "Top proizvodi",
      description: `Pregledajte našu široku ponudu autokozmetičkih proizvoda.
            Kategorizovani proizvodi za lako pretraživanje: od zaštite boje do
            brze nege.`
    },
    {
      id: 3,
      title: "Korpa za kupovinu",
      description: `Dodajte proizvode u korpu jednostavnim klikom na dugme „Dodaj u
            korpu“. Pregledajte korpu kad god želite – jednostavno pristupite u
            gornjem desnom uglu.`
    },
    {
      id: 4,
      title: "Evo vodiča kako najbolje iskoristiti naš webshop:            ",
      description: `Pregledajte našu široku ponudu autokozmetičkih proizvoda.
            Kategorizovani proizvodi za lako pretraživanje: od zaštite boje do
            brze nege.`
    },
    {
      id: 5,
      title: "Kupovina na jedan klik",
      description: `Prijavite se kako biste imali brz pristup svojoj istoriji kupovina i
            brže obavljali kupovinu na jedan klik.`
    },
    {
      id: 6,
      title: "Kontaktirajte nas",
      description: `Ako imate bilo kakva pitanja ili vam je potrebna pomoć posetite
            stranicu Kontaktirajte Nas ili koristite Chat opciju u donjem desnom
            uglu.`
    }
  ];

  return (
    <section className="vodic container">
      <div className="row justify-content-between">
        {items.map((item, index) => (
          <div className="col-md-5" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Guide;
