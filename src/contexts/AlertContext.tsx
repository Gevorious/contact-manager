import { createContext, useContext, useState } from "react";

type AlertType = "success" | "error" | "info";

type AlertContextProps = {
  message: string;
  type: AlertType;
  showAlert: (message: string, type: AlertType) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

type AlertProviderProps = {
    children: React.ReactNode;
};

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alert, setAlert] = useState<{ message: string; type: AlertType }>({
    message: "",
    type: "info",
  });

  const showAlert = (message: string, type: AlertType) => {
    setAlert({ message, type });
  };

  const hideAlert = () => {
    setAlert({ message: "", type: "info" });
  };

  return (
    <AlertContext.Provider value={{ ...alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};