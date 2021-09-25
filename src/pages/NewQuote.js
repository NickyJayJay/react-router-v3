import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const addQuoteHandler = quoteData => {
        console.log(quoteData);
    }

    return <QuoteForm OnAddQuote={addQuoteHandler} />
};

export default NewQuote;