import { AiFillStar } from "react-icons/ai";
import Nav from "../../components/Nav";

export default function Reviews() {
    return (
        <section className="reviews">

            <h2>
                Your reviews
                <span>last <span>30 days</span></span>
            </h2>

            <div className="review-chart">
                <img src="" alt="" />
            </div>

            <div className="review-wrapper">
                <div className="rating-stars">
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                </div>

                <div className="review">
                    <h5 className="review-header">Elliot <span>December 1, 2022</span></h5>

                    <p className="review-body">
                        The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
                    </p>
                </div>
            </div>

            <div className="review-wrapper">
                <div className="rating-stars">
                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                </div>

                <div className="review">
                    <h5 className="review-header">Sandy <span>November, 2022</span></h5>

                    <p className="review-body">
                        This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!
                    </p>
                </div>
            </div>
        </section>
    )
}