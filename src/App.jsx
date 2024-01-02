import React from 'react'
import Navbar from './Componenet/Navbar'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Fullstack from './Componenet/Fullstack'
import Datascience from './Componenet/Datascience'
import Cybersecurity from './Componenet/Cybersecurity'
import Career from './Componenet/Career'
import All from './Componenet/All'


function App() {
  const card = [
    {
      name: "UI & UX",
      
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.codilar.com/wp-content/uploads/2023/02/7-tips-on-how-to-improve-the-UXUI-design-of-a-web-application.png",
    },
    {
      name: "User Experience",
      
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.codilar.com/wp-content/uploads/2023/02/7-tips-on-how-to-improve-the-UXUI-design-of-a-web-application.png",
    },
 
    {
      name: "UI Developer",
      
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
    },
    {
      name: "Mean stack",
      
      category : "Full Stack",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    },
    {
      name: "Mern stack",
      
      category : "Full Stack",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    },
    {
      name: "Java Full stack",
      
      category : "Full Stack",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    },
    {
      name: "Data Science ",
      
      category : "Data",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    },
    {
      name: "Artificial Intelligence  ",
      category : "Data",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
    },
    {
      name: "Machine Learning ",
      
      category : "Data",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
    },
    {
      name: "Ethical Hacking",
      
      category : "Hack",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
    },
    {
      name: "Cyber Security",
      
      category : "Hack",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-2048x1072.png",
    },
    {
      name: "Cyber Crime",
      
      category : "Hack",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    },
    {
      name: "HR Manager",
      
      category : "Career",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
    },
    {
      name: "CTO",
      
      category : "Career",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
    },
  ];
  return (
    <>
     <div className='container'>
      <BrowserRouter>
         <Navbar card={card}/>
          <Routes>
           
            <Route path='/' element={<All card={card} />}/>
            <Route path='/fullstack' element={<Fullstack card={card} />}/>
            <Route path='/datascience' element={<Datascience card={card}/>}/>
            <Route path='/cybersecurity' element={<Cybersecurity card={card}/>}/>
            <Route path='/career' element={<Career card={card}/>}/>
          </Routes>
        </BrowserRouter>
     </div>
      
    </>
  )
}

export default App