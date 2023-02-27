import classes from '../styles/FAQ.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const FAQ = ()=>{
    return <>
        <AnimatePresence>
        <div className={classes.heading_container} >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={classes.bg} src="/images/8.jpg" alt="" />
            <h3 className={classes.heading} > Frequently Asked Questions </h3>
        </div>
        <div className={classes.container}>
        <motion.div 
            className={classes.question_container}
            initial={{opacity:0,translateY:-100,skewX:0}}
            whileInView={{opacity:1,translateY:0,skewX:-20}}
            transition={{duration:0.6,delay:2.5,type: "spring", stiffness: 30}}
            viewport={{ once: true, }}
        >
             <motion.div>
                <h4> Question: </h4>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.answer_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,delay:2.5,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> Answer: </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore pariatur corrupti ipsum corporis? Ex facilis ratione placeat eius recusandae consequuntur facere iusto dignissimos, voluptatem, labore nam atque, ipsum omnis?</p>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.question_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,delay:2.5,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> Question: </h4>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.answer_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,delay:2.5,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> Answer: </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore pariatur corrupti ipsum corporis? Ex facilis ratione placeat eius recusandae consequuntur facere iusto dignissimos, voluptatem, labore nam atque, ipsum omnis?</p>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.question_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> Question: </h4>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.answer_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> Answer: </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore pariatur corrupti ipsum corporis? Ex facilis ratione placeat eius recusandae consequuntur facere iusto dignissimos, voluptatem, labore nam atque, ipsum omnis?</p>
                </motion.div>
        </motion.div>
        </div>
        </AnimatePresence>
    </>
}

export default FAQ;