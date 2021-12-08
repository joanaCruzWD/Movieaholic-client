import bgHomePage from '../../images/HomePage-BG.png';

function HomePage() {
  return (
    <div>
      <div className="title-home">
        <h1>Movieaholic</h1>
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='Search 🔍' />
      </div>
      <div className='filter-movies'>
        <select value={''} onChange={'handleChange'} > {/* NEED TO DO THIS ONCHANGE */}
          <option value='title'>Title</option>
          <option value='release_date'>Release date</option>
          <option value='rating'>Rating</option>
          <option value='popularity'>Popularity</option>
        </select>
      </div>
      <div className="bg-home">
        <img src={bgHomePage} alt="bg-home" width="300px"></img>
      </div>
    </div>
  );
}

export default HomePage;