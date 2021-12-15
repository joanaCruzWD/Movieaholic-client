import notfoundImg from './../../images/404.jpg';


function ErrorPage() {
  return (
    <div className='not-found'>

      <img src={notfoundImg} alt='not-found-img' width='90%' />

    </div>
  );
}

export default ErrorPage;

