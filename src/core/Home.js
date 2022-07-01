import { API } from '../backend';
import '../styles.css';
import Base from './Base';

const Home = () => {
  console.log('API is', API);
  return (
    <Base title="Home Page" description="Welcome to the T-shirt stuff">
      <div className="row">
        <div className="col-4">
          <div className="btn btn-success">Test</div>
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
