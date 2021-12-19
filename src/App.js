import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState(`
  ## markdown preview
  > Here is a quote by someone
  #### Hello world
  I'm baby chambray **truffaut** artisan roof party, migas lo-fi asymmetrical next level adaptogen subway tile tilde YOLO. 
  - first
  - second
  - third
  1. first
  2. second
  3. third
  
  [google](https://www.google.com)
  ![image](https://images.pexels.com/photos/5272961/pexels-photo-5272961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`);
  return (
    <section className='markdown'>
      <textarea
        className='input'
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
      ></textarea>
      <article className='result'>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </article>
    </section>
  );
}
export default App;
