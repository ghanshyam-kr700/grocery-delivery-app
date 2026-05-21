import { useState } from "react";
import { heroSectionData } from "../assets/assets";
import { BikeIcon, Loader2Icon, LockIcon, MailIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* left side */}
      <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center">
        <img
          src={heroSectionData.hero_image}
          alt=""
          className="absolute inset-0 object-cover h-full w-full opacity-10"
        />

        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Welcome back to instacart
          </h2>

          <p className="text-white/60 font-serif text-xl max-w-sm mx-auto">
            Fresh groceries and organic produce delivered to your doorstep.
          </p>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* form header */}
          <div className="text-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-6"
            >
              <BikeIcon className="size-8 text-app-green" />

              <span className="text-2xl font-semibold text-app-green">
                Instacart
              </span>
            </Link>

            <h1 className="text-2xl font-semibold text-app-green mb-2">
              {isLoginState ? "sign in to your account" : "sign up for an account"}
            </h1>

            <p className="text-sm text-app-text-light">
              {isLoginState ? "dont have an account" : "Already have an account?"} <button onClick={() => setIsLoginState(!isLoginState)} className="text-orange-500 ml-1 font-semibold hove:text-orange-600 transition-colors">{isLoginState ? "createone" : "sign in"}</button>
            </p>
          </div>
          {/* log in register form  */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLoginState && (
                <label className="text-sm flex flex-col gap-1">
                  Name

                  <div className="relative">
                    <UserIcon
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"
                    />

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Enter your name"
                      className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border focus:border-app-border transition-all"
                    />
                  </div>
                </label>
              )}
              <label className="text-sm flex flex-col gap-1">
                Email Adress

                <div className="relative">
                  <MailIcon
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@emaple.com"
                    className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border focus:border-app-border transition-all"
                  />
                </div>
              </label>
                              <label className="text-sm flex flex-col gap-1">
                  password

                  <div className="relative">
                    <LockIcon
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"
                    />

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="......."
                      className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border focus:border-app-border transition-all"
                    />
                  </div>
                </label>
                <button type="submit" disabled={loading} className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50">
                  {loading? <Loader2Icon className="animate-spin"/> : isLoginState? "signIn":"signup"}
                </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 