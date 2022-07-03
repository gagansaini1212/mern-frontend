import Base from '../core/Base';

const signinFrom = () => {
  return (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
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

const Signin = () => {
  return (
    <Base title="Signin page" description="A page for user to sign in!">
      {signinFrom()}
    </Base>
  );
};

export default Signin;
