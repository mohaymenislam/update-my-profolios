import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
   const items = ["Designer" , 'Freelance' , 'Developer'];
   const [currentIndex , setCurrentIndex] = useState(0);
     useEffect( () => {
       const interval = setInterval( () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1)% items.length) // 3 % 3 = 0 
       }, 3000)

       return () => clearInterval(interval)

     }, [])
    return (
       <section id='home'>
          <div className="container">
             <div className={styles.home}>
                 <div className={styles['home-content']}>
                     <div className={styles['home-title']}>
                        <h2>Hey , I' m </h2>
                        <h1>Mohaymen</h1>
                     </div>
                       <div className={styles['text-wrapper']}>
                          <p>
                            Creative  <span className={styles.items}>
                              {items[currentIndex]}
                            </span>
                            </p>
                       </div>
                       <div className={styles.links}>

                          <div className={styles.link}>
                             <a href="#projects">View Projects</a>
                          </div>

                          <span className={styles.divider}> Or </span>

                          <div className={styles.link}>
                             <a href="#about">Read About Me</a>
                          </div>

                       </div>

                         <div className={styles.scroll}>
                            <a href="#about">
                                <span></span>
                            </a>
                         </div>
                 </div>
                 <div className={styles.circle}>
                     <div className={styles.content}>
                        <img src="./images/mohaymen.jpg" alt="mohayman " />
                         <h2>Mohaymen Islam 
                            <br /> <span /> Web Developer </h2>
                          <a href="#contact">Hire Me</a>
                     </div>
                 </div>
             </div>
          </div>
       </section>
    );
};

export default Home;