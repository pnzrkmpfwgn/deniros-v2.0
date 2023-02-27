import Link from 'next/link';
import classes from '../styles/contact.module.css';
import { AnimatePresence,motion } from 'framer-motion';

const Contact=()=>{
    return <>
        <div className={classes.heading_container} >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={classes.bg} src="/images/7.jpg" alt="" />
            <h3 className={classes.heading} > Contact </h3>
        </div>
        <AnimatePresence>
        <motion.div 
                animate={{opacity:1,translateY:0,skewX:10}}
                initial={{opacity:0,translateY:-100,skewX:0}}
                transition={{duration:0.6,delay:2.5,type: "spring", stiffness: 30}}
                className={classes.contact_container}>
             <div className={classes.contact_details}>
                <address> ADRES </address>
                <p> Mobile Number: </p>
                <p> Landline: </p>
                <Link href="#"> whatsapp <i className='fa fa-whatsapp'></i> </Link>
                </div>
        </motion.div>
        </AnimatePresence>
    </>
}

export default Contact;