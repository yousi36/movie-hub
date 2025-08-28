import { useRouteError, useNavigate } from "react-router-dom";
import { AlertTriangle, Home, ArrowLeft, Search, Lock, Wrench } from "lucide-react"; 

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  // Extract error info
  const status = error?.status || 500;

  // Map error codes to custom messages & icons
  const errorConfig = {
    404: {
      message: "Page Not Found – The page you’re looking for doesn’t exist.",
      icon: <Search size={80} className="text-red-500 mb-4" />,
    },
    401: {
      message: "Unauthorized – You don’t have permission to view this page.",
      icon: <Lock size={80} className="text-yellow-500 mb-4" />,
    },
    403: {
      message: "Forbidden – Access to this resource is restricted.",
      icon: <Lock size={80} className="text-orange-500 mb-4" />,
    },
    500: {
      message: "Internal Server Error – Something went wrong on our end.",
      icon: <Wrench size={80} className="text-gray-600 mb-4" />,
    },
    503: {
      message: "Service Unavailable – Please try again later.",
      icon: <AlertTriangle size={80} className="text-purple-500 mb-4" />,
    },
  };

  const errorData = errorConfig[status] || {
    message: error?.statusText || error?.message || "Something went wrong!",
    icon: <AlertTriangle size={80} className="text-red-500 mb-4" />,
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-montserrat px-6 text-center">
      {/* Error Icon */}
      {errorData.icon}

      {/* Error Code */}
      <h1 className="text-6xl font-bold text-red-500 mb-2">{status}</h1>

      {/* Error Message */}
      <p className="text-lg text-gray-700 mb-6 max-w-lg">
        {errorData.message}
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 px-6 py-2 bg-yellow-400 text-black rounded-xl shadow-md hover:bg-yellow-500 transition"
        >
          <ArrowLeft size={18} />
          <span>Go Back</span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 px-6 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition"
        >
          <Home size={18} />
          <span>Go Home</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
