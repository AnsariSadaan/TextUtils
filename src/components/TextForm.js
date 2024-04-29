import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        // let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleard text!", "success");
    }
    
    const handleAlternateClick = () => {
        let newText = text.split('').map((c,i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
        setText(newText);
        props.showAlert("Converted to alternatecase!", "success");
    }
    
    // const handleDownloadClick = () => {
        //     let newText = '';
        //     setText(newText);
        // }
        
        const handleCapitalClick = () => {
            let newText = text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
            setText(newText); 
            props.showAlert("Converted to capitalizedcase!", "success");
        }
        
        const handleRemoveExtraSpace = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed!", "success");
        }
        
        const copyText = () => {
            var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            document.getSelection().removeAllRanges();
            props.showAlert("Copied to clipboard!", "success");
    }

    const handleOnChange = (e)=>{
        // console.log("on change");
        setText(e.target.value);
    }


    

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to chage the state
    // setText("new text"); // right way to chage the state
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#042743':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCapitalClick}>Capitalized Case</button>
                {/* <button className='btn btn-primary mx-1' onClick={handleDownloadClick}>Download</button> */}
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleAlternateClick}>aLtErNaTiNg cAsE</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy Text</button>

        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
            <p> <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
