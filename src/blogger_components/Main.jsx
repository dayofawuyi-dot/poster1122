import Loader from "./Loader"
import Post from "../Post"
const Main = ({posts, loading, error}) => {
    return (
        <div className="container px-4 px-lg-2">
  <div className="row gx-4 gx-lg-5 justify-content-center">
    <div className="col-md-10">
            {
                loading && !error && <Loader/>
            }
            {
                loading && error && <p className="alert alert-danger" role="alert">
                    Error fetching posts
                </p>

            }

              {
                posts && posts.map((po,index)=>{
                   return(
                     <Post key={index} po={po}/>
                   )
                })
              }

           
            {/* Pager*/}
            <div className="d-flex justify-content-end mb-4">
                <a className="btn btn-danger text-uppercase" href="#!">
                Older Posts →
                </a>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Main