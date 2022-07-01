import Base from '../core/Base';

const signupFrom = () => {
  return (
    <div className="row">
      <div className="col-md offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light">Name</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label className="text-light">Email</label>
            <input className="form-control" type="email" />
          </div>
          <div className="form-group">
            <label className="text-light">Password</label>
            <input className="form-control" type="password" />
          </div>
          <div className="d-grid gap-2 pt-3">
            <button className="btn btn-success" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Signup = () => {
  return (
    <Base title="Signup page" description="A page for user to sign up!">
      {signupFrom()}
    </Base>
  );
};

export default Signup;
