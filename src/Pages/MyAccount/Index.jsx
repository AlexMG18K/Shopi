import LayOut from "../../Components/Layout"
import { Link } from "react-router-dom";


function MyAccount() {
    return (
      <>
      <h1 className="text-xl font-medium">
      <LayOut>
      Log In
      </LayOut>
      </h1>
      <h1></h1>
      <div className="flex justify-center items-center flex-col" style={{marginTop: '5%'}} >
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
          </div>
          <div className="mb-10">
            <input className="ml-2 border-black border rounded-md text-center font-light " type="text" placeholder="Alex@shopi.com.co" />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
          </div>
          <div className="mb-8">
            <input className="ml-2 border-black border rounded-md text-center" type="password" placeholder="*******" />
          </div>
        </div>
        <Link to={'/'}>
        <button className="bg-black text-white rounded-lg px-8 py-2 mt-7">Log In</button>
        </Link>
      </div>
    </>
  );
}
  
  export default MyAccount