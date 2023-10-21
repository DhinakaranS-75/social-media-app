
import Posts from "../../compoents/posts/Posts";
import Share from "../../compoents/share/Share";
import Stories from "../../compoents/stories/Stories";
import "./home.scss"

const Home = () => {
  return (
    <div className="home">

      
      <Stories />
      <Posts />
      <Share />
     
    </div>
  )
}

export default Home;