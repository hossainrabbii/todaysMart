import { getCurrentUser } from "@/services/AuthService";

const HomePage = async () => {
  const user: any = await getCurrentUser();
  console.log(user);
  return (
    <div>
      Welcome to home page
      <>{user ? <span> - {user?.email}</span> : <span></span>}</>
    </div>
  );
};

export default HomePage;
