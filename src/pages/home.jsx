import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-row justify-center items-center text-center px-4 gap-10">
        <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Explore Countries with Real-Time Data</h1>
      <p className="text-xl mt-2 max-w-lg">
        Discover details about every country around the world – from capitals to regions!
      </p>
      <div className="flex gap-4 mt-6 ml-32">
        <button 
          onClick={() => navigate("/about")} 
          className=" bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-300"
        >
            Explore Now 
        </button>
        <button 
          onClick={() => navigate("/countries")} 
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Learn More
        </button>
      </div>
      </div>
      <div className="flex ">
            <img src="./src/assets/image.jpg" alt=""  className="w-200 shadow-2xl rounded-2xl"/>
        </div>
    </div>
  );
};

export default Home;

