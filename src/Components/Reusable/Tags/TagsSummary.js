import React, { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";

export default function TagsSummary({ blogs }) {
  const [tags, setTags] = useState([]);
  let reduceArr

  useEffect(() => {
    settingTags(blogs);
  }, [blogs]);

  const settingTags = (blog) => {
    let arr = [];
    let tagArr = [];

    if (blog.blogs) {
      //this very ugly function flattens out the results from each blog into one big array so we can sort it later and note frequency
      arr.push(blog.blogs.map((blog) => {
        return blog.tags;
      }));
      let newArr = arr.flat(2)
        .map((tag) => {
          let newTags = [tag.split(" ")];
          return newTags;
        })
        .flat(3);
      for (let i = 0; i < newArr.length; i++) {
        let tempTag = {tag: newArr[i]}
        tagArr.push(tempTag)
      }
      //compiles tags into an object that lists frequency
      reduceArr = tagArr.reduce((x,y)=>{if(x[y.tag]) {x[y.tag]++;return x;} else {var z={};z[y.tag]=1;return Object.assign(x,z,);}},{})
      //sorts entries by frequency
      let sorted = Object.fromEntries(
        Object.entries(reduceArr).sort(([,a],[,b]) => b-a)
      )
      //puts them into the tag object
      Object.keys(sorted).map(function(key, index) {
        console.log(key, sorted[key])
        setTags((prevState) => [...prevState, {tag: key, count: sorted[key]}])
      })
    }
  };

  if (tags) {
    return (
      <>
      <h2>What's the word?</h2>
      <p>Check out these tags & the blogs attached</p>
        {tags.map((tag, index) => {
          console.log("tag",tag)
          return (
            <NavLink key={index} to={`/blog/tags/${tag.tag}`}>
            <p loading="lazy">
              {tag.tag} ({tag.count})
            </p>
            </NavLink>
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
}
