import React, { useEffect, useState } from "react";

export default function Card({ image }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    let newTags = image.tags.split(",").map(tag => tag.trim());
    setTags(newTags);
  }, []);

  return (
    <div className="bg-neutral-200 m-1 rounded  hover:shadow-blue-500 hover:shadow-md overflow-hidden max-w-sm inline-block">
      <img src={image.webformatURL} alt={image.id} className="w-full" />
      <div className="text-darkblue text-xl font-bold px-2 py-4">
        Photo By {image.user}
      </div>
      <div className="px-2 py-4 text-left ">
        <ul>
          <li>
            <strong>Views:&nbsp;</strong>{image.views}
          </li>
          <li>
            <strong>Downloads:&nbsp;</strong>{image.downloads}
          </li>
          <li>
            <strong>Likes:&nbsp;</strong>{image.likes}
          </li>
          <li>
            <strong>Comments:&nbsp;</strong>{image.comments}
          </li>
        </ul>
      </div>
      <div className="px-2 py-4 text-left">
        {tags.map((tag,id) => (
          <span key={id} className="inline-block px-3 py-1 m-1 font-semibold bg-gray-300 text-gray-700 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
