import React from 'react'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Counter from './components/Counter'

export default function App() {
  return (
    <div>

      <Counter />
      
      <Heading content="This is heading 1" />
      <Heading content="This is heading 2" />
      <Heading content="This is heading 3" />
      <Paragraph>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi corrupti itaque repellendus ea facilis beatae reiciendis cupiditate in asperiores nulla facere nesciunt fuga sed, impedit magni, natus praesentium. Dignissimos!</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aspernatur officiis quod suscipit blanditiis ipsa cupiditate asperiores pariatur sapiente quas vitae, obcaecati aliquam dolore tenetur distinctio ipsum architecto nihil laboriosam.</span>
      </Paragraph>
    </div>
  )
}
