import { Routes, Route, Navigate, Router,Link } from "react-router-dom";
import Allquote from "./pages/Allquote";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/Newquote";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div>
      <Layout >
      <Routes>
        <Route path="/quotes" element={<Allquote />} />
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes/:quoteId/" element={<QuoteDetail />}>
          {/* <Route path="comments" element={<Comments />} /> */}
          <Route
            path=''
            element={
              <div className='centered'>
                <Link className='btn--flat' to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
