import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center p-4 m-4 bg-gray-600 text-white text-3xl">
      Github followers: {data.followers}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/RohitDev-sudo");
  return response.json();
};
