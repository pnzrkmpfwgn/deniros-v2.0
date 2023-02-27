import classes from '../styles/menu.module.css';
const Menu = () => {
    return<>
         <div className={classes.heading_container} >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={classes.bg} src="/images/9.jpg" alt="" />
            <h3 className={classes.heading} > Menu </h3>
        </div>
        
        <iframe style={{width:"100vw",height:"100vh"}} src="https://online.fliphtml5.com/kzyks/yjhe/"  seamless="seamless" allowtransparency="true" allowfullscreen="true" ></iframe>
    </>
}

export default Menu;