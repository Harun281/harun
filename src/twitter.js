import React, {useState,useEffect} from 'react';
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterContainer = () => {
  const [isNight, setNight] = useState(false);
  useEffect(() => {
    const now = new Date();
    let hour = now.getHours(Date());
    setNight(hour > 18 || hour < 7);
    return () => {
      hour = undefined;
    };
  }, []);
  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType = "profile"
          screenName = "HarunMuriiki"
          options={{
            tweetLimit: "5",
            width: "90%",
            height: "auto"
          }}
          theme={isNight? 'dark': 'light'}
          noHeader = {true}
          noBorders = {false}
          noFooter= {true}
        ></TwitterTimelineEmbed>
      </div>
    </section>
  );
};

/*const TwitterContainer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "twitter-timeline");
      anchor.setAttribute("data-theme", "dark");
      anchor.setAttribute("data-tweet-limit", "5");
      anchor.setAttribute("data-chrome", "noheader nofooter noborders");
      anchor.setAttribute("href", "https://twitter.com/HarunMuriiki");
      document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
  
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
  
    return (
      <section className="twitterContainer">
        <div className="twitter-embed"></div>
      </section>
    );
  };*/
function Twitter(props){
    return(
        <div className='twitter'>
            <h5><span className="h4line"></span>&nbsp;&nbsp;Harun's Recent Tweets</h5>
            <TwitterContainer />

        </div>
    );
}

export default Twitter;