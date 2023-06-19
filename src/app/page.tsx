import { FaCopyright } from 'react-icons/fa';
import {FaFacebook}from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
<div className="home">
  <video src="/videos/v1.mp4" loop autoPlay muted poster='/images/robot.png'></video>
  <header>
    <nav>
<h3><a href="/">PORTFOLIO</a></h3>
<ul>
  <li><a href="/">Home</a></li>
  <li className="navBtn"><a href="#about">About</a></li>
  <li className="navBtn"><a href="#projects">Projects</a></li>
  <li className="navBtn"><a href="#blogs">Blogs</a></li>
  <li className="navBtn"><a href="#contact">Contact</a></li>
</ul>
    </nav>
  </header>
  <div className="name">
<h2>Hi,</h2>
<h1>I am <span>S</span>hawaal</h1>
<h1>Web Developer</h1>
<p>Frontend Developer, Profficienct in React, Next & Node </p>
<a href="https://wa.me/+923096946556"><button className="hireBtn">Hire Me</button></a>
  </div>
</div>
<div className="seperator"></div>
<div className="about" id="about">
<div className="content">
  <h1>About Me</h1>
  <p>I have created responsive and user-friendly websites using modern front-end technologies. Leveraging my knowledge of HTML, CSS, and JavaScript, I have implemented intuitive user interfaces, engaging animations, and seamless navigation. I am well-versed in popular front-end frameworks such as Bootstrap and Foundation. I have utilized these frameworks to streamline development processes, enhance cross-browser compatibility, and ensure mobile responsiveness.</p>
<br/>
<p className="aboutHeading2">Technologies I have worked with:</p>
<br/>
<div className="tech">
  <p>Html</p>
  <p className="col2">React Js, Next Js</p>
</div>
<div className="tech">
  <p>CSS</p>
  <p className="col2">Bootstrap, Material UI</p>
</div>
<div className="tech">
  <p>Javascript</p>
  <p className="col2">Node Js</p>
</div>
<div className="tech">
  <p>Typescript</p>
  <p className="col2">VS Code</p>
</div>
<div className="tech">
  <p>Github</p>
  <p className="col2">Vercel, Netlify</p>
</div>
</div>
<div className="pic">
  <img src="/images/aboutimg.png"></img>
</div>
</div>
<div className="bgcolor">
<div className="projects" id="projects">
  <br/> 
  <div className="content">
  <h1>PROJECTS</h1>
  <div className="projPics">
  <a href="https://shawaal-nadeem-resume.vercel.app/"><img src="/images/resume.png"></img></a>
  <a href="https://timely-malabi-4992be.netlify.app/"><img src="/images/apple.png"></img></a>
  <a href="https://fastidious-peony-79400b.netlify.app/"><img src="/images/wild.png"></img></a>
  </div>
  <div className="projPics">
  <a href="https://jolly-pothos-054324.netlify.app/"><img src="/images/tax.png"></img></a>
  <a href="https://voluble-mochi-872c02.netlify.app/"><img src="/images/compiler.png"></img></a>
  <a href="https://sweet-taiyaki-797094.netlify.app/"><img src="/images/expense.png"></img></a>
  </div>
  </div>
  <br/><br/><br/>
</div>
<div className="blogs" id="blogs">
<div className="content">
  <h1>BLOGS</h1>
  <p>Embark on a journey to master the art of web development as we unravel the secrets behind crafting captivating and functional websites. join me in unlocking the boundless possibilities of creating remarkable web experiences.</p>
</div>
<div className="blogImages">
  <div className='blogSection1'>
  <img src="/images/blogPic1.png"></img>
  <div className="tagBtn">
  <button>Tag</button>
  <button className="tagBtn2">Tag</button>
  </div>
  <p>Web development is the art of crafting virtual realities, where lines of code breathe life into pixels, and imagination dances with technology to shape the digital landscape.</p>
  </div>
  <div className='blogSection2'>
  <img src="/images/blogPic2.png"></img>
  <div className="tagBtn">
  <button>Tag</button>
  <button className="tagBtn2">Tag</button>
  </div>
  <p>Web development is the art of crafting virtual realities, where lines of code breathe life into pixels, and imagination dances with technology to shape the digital landscape.</p>
  </div>
</div>
<div className='blogReadBtn'>
<Link href={'/blogs'}><button className="readBtn">Read More</button></Link>
</div>
</div>
</div>
<div className="contact" id="contact">
  <div className="content">
    <h1>Contact Me</h1>
    <p>Get in touch with me for any inquiries, collaborations, or opportunities. I am always interested in connecting with new people and exploring exciting projects. Feel free to reach out through the contact form, email, or phone, and I will respond promptly. I look forward to hearing from you!</p>
    <div className="contactInfo">
    <div className="contactDetail">
    <p className="head">Email:</p>
    <p className="info">webdevpro55@gmail.com</p>
  </div>
  <div className="contactDetail">
    <p className="head">Phone:</p>
    <p className="info">+923096946556</p>
  </div>
  </div>
  </div>
</div>
<footer>
  <br/><br/><br/>
  <div className='copyright'>
  <FaCopyright size={24}/>
  <span> &nbsp;</span>
<p>2023 All Rights Reserved</p>
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div className='socialIcons'>
<a href='https://www.facebook.com/profile.php?id=100073295470963'><FaFacebook size={26}/></a>
<a href='https://twitter.com/ShawaalNadeem?t=IjNgxDNGOgIO6X8FQt_jZg&s=09'><FaTwitter size={26} style={{marginLeft:'15px'}}/></a>
<a href='https://github.com/Shawaal-Nadeem'><FaGithub size={26} style={{marginLeft:'15px'}}/></a>
  </div>
  <br/><br/><br/>
</footer>
    </div>
  )
}
