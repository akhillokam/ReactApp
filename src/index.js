import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

function BookList(){
  return ( 
    <section className ='booklist' > 
      <Book />
    </section>
  );
}

const author = 'Mark Manson'
const Book = () =>{
  const title = 'The Subtle Art of Not Giving a F*ck'
  return (
     <article className='book'>
       <img src='https://images-na.ssl-images-amazon.com/images/I/51mN3bY0JjL._SX332_BO1,204,203,200_.jpg' alt='' />
       <h1>{title}</h1>
       <h4>{author.toUpperCase()}</h4>

     </article>
  );
};



ReactDom.render(<BookList/>, document.getElementById('root'));