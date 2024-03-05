import React from "react";
import ReactDOM from "react-dom/client";
// import memesData from "../memesData";

     /**
     * Challenge final to complete the project: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    
        /**
     * Challenge final : 
     * Try to figure out why our code is broken! 😞
     * 
     * Hint: it has to do with the difference between
     * what we were importing before from memesData.js
     * and what we're setting our state as with `allMemes`
     */
    


     /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

export default function Meme(){
 

       /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

   const[meme, setMeme] = React.useState({
     topText:"",
     bottomText:"",
    randomImage:"https://i.imgflip.com/1bij.jpg"
   })

   const [allMemes, setAllMemes] = React.useState([]/**memesData*/)

   
   React.useEffect(() => {
       fetch("https://api.imgflip.com/get_memes")
       .then(res => res.json())
       .then(data => setAllMemes(data.data.memes))
   }, [])
  //  console.log(allMemes)

  /*  IF YOU NEED ASYNC FUNCTION

  React.useEffect(() => {
  async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemes(data.data.memes)
  }

  getMeme()

  return () => {
     // if you need a clean up function
  }
}, [])
  */


    /** EXPLANATION
     
      
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    











//    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/lbij.jpg")

   function getMemeImage(){
 
    
    // const allMemes = allMemes.data.memes
    const randomNum = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNum].url
 
      setMeme(prevMeme => ({
        ...prevMeme, 
        randomImage:url
      }))
   }

  function handleChange(){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }


  // React.useEffect(function(){
  //   fetch("https://api.imgflip.com/get_memes")
  //   .then(res )
  // })

    return ( 
        <main>
        <div className="form">
            <input 
                className="form-input"
                type="text" 
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            ></input>
            <input 
                className="form-input" 
                type="text" 
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            ></input>
            <button 
                 className="form-btn" 
                 onClick={getMemeImage}
                 name="randomImage"
                 value={meme.randomImage}
                 onChange={handleChange}
                 >
                 Get a new meme image  🖼
                 
            </button>
            
        </div>

        <div className="meme">
        <img className="form-random-image"src={meme.randomImage} /> 
        <h2 className="meme-text-top">{meme.topText}</h2>
        <h2 className="meme-text-bottom">{meme.bottomText}</h2>
        </div>
        </main>
    
    )
}