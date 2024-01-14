import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { FaRegMessage } from "react-icons/fa6";
import Signin from "./Signin";

export default function Navbar() {
  return (
    <nav className="flex py-5 items-center">
      <Link to="/">
        <h1 className="text-lg ml-12">Gighaven</h1>
      </Link>
      <ul className="ml-8 flex gap-5">
        <li>
          <Link to="/freelancers">Freelancers</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </ul>
      {false ? (
        <div className="ml-auto mr-12 flex gap-8 items-center">
          <Link to="/inbox">
            <FaRegMessage className="text-2xl" />
          </Link>
          <Link to="/profile">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      ) : (
        <ul className="flex gap-5 ml-auto mr-12">
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <span className="cursor-pointer">Signin</span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-10">
                      Sign in to your account
                    </h1>
                  </DialogTitle>
                </DialogHeader>
                <Signin />
              </DialogContent>
            </Dialog>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
