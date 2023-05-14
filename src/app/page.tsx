
export default function Home() {
  return (
    <div>
<div className="home">
  <video src="/videos/v1.mp4" loop autoPlay muted></video>
  <header>
    <nav>
<h3><a href="/">PORTFOLIO</a></h3>
<ul>
  <li><a href="/">Home</a></li>
  <li className="navBtn"><a href="#about">About</a></li>
  <li className="navBtn"><a href="/">Blogs</a></li>
  <li className="navBtn"><a href="/">Contact</a></li>
  <li className="navBtn"><a href="/">Resume</a></li>
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
<p className="aboutHeading2">Technologies I've worked with:</p>
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
    </div>
  )
}
