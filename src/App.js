import { useEffect, useState } from "react";
import Card from "./component/Card";
import Loader from "./component/Loader";
import Search from "./component/Search";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
        .then(res => res.json())
        .then(data => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch(err => console.error(err));
    }, 1000);
  }, [term]);

  return (
    <div className="bg-slate-900 text-center min-h-screen min-w-screen py-5 px-1">
      <Search
        onChange={t => {
          setTerm(t);
        }}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {images.length > 0 ? (
            <div className="gallery ">
              {images.map(image => (
                <Card key={image.id} image={image} />
              ))}
            </div>
          ) : (
            <div className="p-2 rounded font-semibold text-white text-3xl">
              No Images Found.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
