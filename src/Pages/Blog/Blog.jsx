import LeftBlog from './LeftBlog'
import RightBlog from './RightBlog'
import './blog.css'
export default function Blog() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12 about-content ">
                            <div className="content">
                                <h1>Blog</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="home blog pt-5 overflow-hidden ">
                <div className="container ">
                    <div className="row">
                        <LeftBlog />
                        <RightBlog />
                    </div>
                </div>
            </section>
        </>
    )
}
