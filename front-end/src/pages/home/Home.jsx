
import Posts from "../../compoents/posts/Posts";
import Stories from "../../compoents/stories/Stories";
import "./home.scss"

const Home = () => {
  return (
    <div className="home">

      
      <Stories />
      <Posts />
      
     
    </div>
  )
}

export default Home;