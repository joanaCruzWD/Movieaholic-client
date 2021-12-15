import notfoundImg from './../../images/404.jpg';
// import './../ErrorPage/ErrorPage.css';


function ErrorPage() {
  return (
    <div className='not-found'>

      <img src={notfoundImg} alt='not-found-img' width='100%' />

    </div>
  );
}

export default ErrorPage;

