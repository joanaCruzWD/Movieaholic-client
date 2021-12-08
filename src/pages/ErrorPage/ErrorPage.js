import notfoundImg from './../../images/NotFound.jpg'

//!!! Fix the image---> do it with css

function ErrorPage() {
  return (
    <div className='not-found'>
      <img src={notfoundImg} alt='not-found-img' width='700rem' />

    </div>
  );
}

export default ErrorPage;

