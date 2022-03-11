import { useState, useEffect } from "react";
import ReactLoading from 'react-loading';
import axios from 'axios';

const RhymeWords = () => {

  const [word, setWord] = useState('')
  const [rhymes, setRhymes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    const wordValue = document.getElementById('wordInput').value
    if(wordValue !== '' && wordValue !== word) {
      setRhymes([]);
      setWord(wordValue)
      setLoading(true);
    }
  }

  useEffect(() => {

    const getRhymes = () => {
      if(word === '' || word.split(' ').length !== 1) return

      let results = []
      const URL = `https://api.datamuse.com/words?rel_rhy=${word}`

      axios.get(URL, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then(res => {
        res.data.forEach(element => {
          results.push(element.word)
          setLoading(false);
        })
        setRhymes(results)
      })
    }

    getRhymes()

  }, [word])




  useEffect(() => {
    document.getElementById('wordInput').focus();
  }, [])

  return (
    <div className='bg-blue-500 h-screen flex justify-center items-center'>
       <div className="max-w-xl p-8">
          <div className="mb-4">
              <label className="block text-lg font-bold mb-2 text-white" htmlFor="fullname">
                Enter Word to find words that rhyme
              </label>
              <input 
                id="wordInput"
                className="appearance-none border border-white bg-transparent w-full p-2.5 leading-tight text-white focus:outline-none focus:shadow-outline placeholder-gray-300" 
                autoFocus
                type="text" 
                placeholder="mature" />
              <button 
                onClick={handleSearch}
                className="mt-4 flex rounded bg-blue-100 hover:bg-blue-200 py-2 px-4">
                 { loading &&
                    <ReactLoading type="spin" color="blue" height="25px" width="25px" />
                 }
                 <span className="ml-2">Search</span>
              </button>
            </div>
            <div className="text-white">
               
                { rhymes.length > 0 &&
                <>
                  <h4 className="text-2xl border-b-2 mb-2">Results</h4>
                  <div className="flex flex-wrap">
                  {
                  rhymes.map((item, index) => (
                    <span className="p-1" key={index}>{item}</span>
                  ))
                  }
                  </div>
                  </>
                }
            </div>
       </div>
    </div>
  )
}

export default RhymeWords;