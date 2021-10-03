import React from 'react'

function Character({id, img, name}) {
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hello world');
    };

    const deleteMain = (id)=> {
        console.log(id)
    }
    return (
        <div>
            <h2 onMouseOver={() => console.log("you're over the text")}> Just some text</h2>
            <h2 onClick={() => console.log(name)}>{name}</h2>
            <img src={img} alt={name} />
            <button type='button' onClick={clickHandler}>Push me!</button>
            <button type='button' onClick={() => deleteMain(id)}>Delete</button>
            <hr />
        </div>
    );
};
export default Character
