import QuoteList from '../components/quotes/QuoteList';
import {useEffect} from 'react';
import NotFound from './NotFound';
import useHttp from '../hooks/use-http';
import {getAllQuotes} from '../lib/api';
function Allquote(){
    const {sendRequest,status,data:loadedQuotes,error}=useHttp(getAllQuotes,true);
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);
    if(status==='pending'){
        return <div className='centered'>
            <p>Loading...</p>
        </div>
    }
    if(error){
        return <div className='centered'>
            <p>{error}</p>
        </div>
    }
    if(status==='completed' && (!loadedQuotes || loadedQuotes.length===0)){
        return <div className='centered'>
            <p>No Quotes Found
                <NotFound/>
            </p>
        </div>
    }
    return <div>
        <QuoteList quotes={loadedQuotes}/>
    </div>
}
export default Allquote;