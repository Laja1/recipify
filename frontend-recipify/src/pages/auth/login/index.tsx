import { imagesLink } from "../../../assets/react-assets";
import { Textfield } from "../../../components/shared";

const Login = () => {
  return (
    <div className="relative">
      <div className=" inset-0">
        <img src={imagesLink.login} className="h-screen w-full object-cover" />
      </div>
      <div className="absolute items-center justify-center flex top-0">
        <div className="bg-white  rounded-lg p-5">
          <Textfield label="First Name" />
        </div>
      </div>
    </div>
  );
};

export default Login;
