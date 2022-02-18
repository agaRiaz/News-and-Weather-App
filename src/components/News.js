import React, { useEffect, useState } from "react";
import thump from '../news.jpg';



import "./news.css";


const News = () => {
    const [news, setNews] = useState([]);
    const [country, setCountry] = useState("in");





    useEffect(() => {
        console.log(process.env);

        const fetchNews = async () => {
            
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
            const response = await fetch(url);
            console.log(response.data);
            const resJson = await response.json();
            console.log(resJson.articles);
            setNews(resJson.articles);

            onChange();


        }
        fetchNews();
    }, [country]);

    
    const onChange = (e) => {
        setCountry(e.target.value);
    }


    let showNews;
    if (news) {
        showNews = news.map((element, index) => (<div key={index} >
            <div className="card">
                <div className="cardBody">
                    <div className="cardImg">
                        {!element.urlToImage ? (
                            <img src={thump} alt="newsImage" />
                        ) : (
                            <img src={element.urlToImage} alt="newsImage" />
                        )
                        }
                    </div>
                    <div className="cardContent">
                        <div className="cardTitle">{element.title}</div>
                        <div className="cardText">{element.content}</div>
                        <div className="moreBtn"><button><a href={element.url}>Read More</a></button></div>
                    </div>
                </div>
            </div>
        </div>));

    }else{
        showNews = <h1>Loading....</h1>;
    }




    return (
        <div className="newsContainer">
            <div className="inputData">
                <input
                    type="search"
                    value={country}
                    className="inputFeild"
                    onChange={onChange}
                />
            </div>
            {!country ? (
                <p className="errorMsg">No data Found</p>
            ) : (
               <div className="showNews">{showNews}</div>
            )
                }

        </div>

    )
}

export default News;