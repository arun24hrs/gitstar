import { useState, useEffect } from "react";
import branch from "../images/merge-git-50.png";
import star from "../images/star-filled-48.png";

const JsPage = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
console.log(data)

  const getData = async() => {
    setLoad(true);
    let res = await fetch(
      `https://api.github.com/search/repositories?q=stars:%3E100000+language:javascript`
    );
    res = await res.json();
    console.log(res)
    setLoad(false);
    return res;
  };

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  if (load) {
    return <h1>...Loading</h1>;
  }

  return (
    <div>
      <h1>JavaScript Repositories</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)"}}>
    {data.items.map((el) => (
        <div key={el.id} style={{textAlign:"center", margin: "auto", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", padding:"20px", marginBottom:"40px"}}>
            <img src={el.owner.avatar_url} width="200px" alt="avatar" />
            <h4>{el.name}</h4>
            <h4>{el.language || "N/A"} </h4>
            <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
                <div><img width="20px" src={star}/>
                <p style={{display:"inline-block"}}>{el.watchers}</p></div>
                <div><img width="20px" src={branch}/>
                <p style={{display:"inline-block"}}>{el.forks_count}</p></div>
            </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default JsPage;
