import React, { useEffect, useState } from "react";

export default function TagsSummary({ blogs }) {
  const [tags, setTags] = useState([]);

  useEffect(()=> {
    let arr = []
    if (blogs.blogs) {
      let tempTags = blogs.blogs.map((blog) => {
        return blog.tags;
      });
      console.info(tempTags);
      arr.push(tempTags);
      let flatArray = tempTags.flat(2);
      console.info(flatArray);
      let newArr = flatArray
        .map((tag) => {
          let newTags = [tag.split(" ")];
          return newTags;
        })
        .flat(3);
      console.info(newArr)
      setTags([...newArr])
    }
  }, [blogs.blogs])



    return <></>;
}
