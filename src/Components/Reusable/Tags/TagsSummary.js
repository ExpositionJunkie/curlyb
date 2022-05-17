import React, { useEffect, useState } from "react";

export default function TagsSummary({ blogs }) {
  const [tags, setTags] = useState(null);

  useEffect(() => {
    settingTags(blogs);
  }, [blogs]);

  const settingTags = (blog) => {
    let arr = [];
    if (blog.blogs) {
      let tempTags = blog.blogs.map((blog) => {
        return blog.tags;
      });
      arr.push(tempTags);
      let flatArray = tempTags.flat(3);
      let newArr = flatArray
        .map((tag) => {
          let newTags = [tag.split(" ")];
          return newTags;
        })
        .flat(3);
      setTags([...newArr]);
    }
  };

  if (tags) {
    return (
      <>
        {tags.map((tag, index) => {
          return (
            <p loading="lazy" key={index}>
              {tag}
            </p>
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
}
