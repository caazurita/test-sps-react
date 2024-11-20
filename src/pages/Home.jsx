import React from "react";
import Layaout from "../components/Layout";

function Home() {
  return (
    <Layaout>
      <div>
        <h1
          className="text-4xl font-bold text-center"
        >SPS REACT TEST</h1>

        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/users">Usuarios</a>
      </div>
    </Layaout>
  );
}

export default Home;
