type AlertBannerProps = {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
}

const AlertBanner = ({ message, type, onClose }: AlertBannerProps) => {
  const alertClasses = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <div
      className={`p-4 ${alertClasses[type]} rounded-md shadow-md flex justify-between items-center z-50`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-lg font-bold text-gray-700"
      >
        &times;
      </button>
    </div>
  );
};

export default AlertBanner;