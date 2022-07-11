import '../styles.css';
import Base from './Base';
import Card from './Card';

const Home = () => {
  return (
    <Base title="Home Page" description="Welcome to the T-shirt stuff">
      <div className="row">
        <div className="col-4 text-center">
          <Card />
        </div>
        <div className="col-4">
          <div className="btn btn-success">Test</div>
        </div>
        <div className="col-4">
          <div className="btn btn-success">Test</div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
