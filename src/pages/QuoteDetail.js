// import { useParams } from "react-router";
import { Route, useParams,Link } from "react-router-dom";
import { Comments } from "../components/comments/Comments";
import { Outlet } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun!" },
//   { id: "q2", author: "Maximilian", text: "Learning React is great!" },
// ];
import {useEffect} from 'react';
function QuoteDetail() {
  const Params = useParams();
  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );
  useEffect(() => {
    sendRequest(Params.quoteId);
  }, [sendRequest, Params.quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="centered">

        <p>{error}</p>
      </div>
    );
  }
  if (status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
    return (
      <div className="centered">
        <p>No Quotes Found</p>
      </div>
    );
  }
  //

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === Params.quoteId);
  if (!loadedQuote) {
    return <p>No Quote Found</p>;
  }
  return (
    <div>
      <h1>QuoteDetail</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* <div className="centered">
        <Link className="btn--flat" to={`/quotes/${Params.quoteId}/comments`} >Load Comments</Link>
        </div> */}
      <Outlet />
    </div>
  );
}
export default QuoteDetail;
