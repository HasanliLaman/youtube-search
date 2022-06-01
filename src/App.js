import VideoContainer from "./components/Main/VideoContainer";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("learn react");
  const [data, setData] = useState([]);
  const [exceed, setExceed] = useState(false);

  useEffect(() => {
    const getData = async function () {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&key=AIzaSyBH3dvj32-E9JgTaY9FtOaSaQkZ_BJBY60&q=${query}`
        );
        const queryData = await res.json();
        if (!queryData.error) {
          setData(queryData);
        } else {
          setExceed(true);
        }
      } catch (e) {
        throw new Error(e);
      }
    };
    getData();
  }, [query]);

  return (
    <main>
      <Navbar setQuery={setQuery} />
      <VideoContainer data={data} isExceed={exceed} />
    </main>
  );
}

export default App;
