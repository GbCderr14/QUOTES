import QuoteForm from '../components/quotes/QuoteForm'
import {useNavigate} from 'react-router-dom';
import useHttp from '../hooks/use-http';
import {addQuote} from '../lib/api'
import {useEffect} from 'react';
function NewQuote(){
    const {sendRequest,status}=useHttp(addQuote);
    const history=useNavigate();
    useEffect(()=>{
        if(status==='completed'){
            history('/quotes');
        }
    },[status,history]);
    const addQuoteHandler=(quoteData)=>{

        sendRequest(quoteData);
        history('/quotes');
    }
    return <div>
        <QuoteForm isLoading={status==='Pending'}onAdd={addQuoteHandler}/>
    </div>
}
export default NewQuote;