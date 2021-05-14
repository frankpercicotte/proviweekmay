
import { UserProvider } from "./User/index";

const Providers = ({ children }) => {
  return (
    <UserProvider>{children}</UserProvider>
  );
};

export default Providers;
