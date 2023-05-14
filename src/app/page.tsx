
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
  <li className="navBtn"><a href="/">About</a></li>
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
<div className="about">
<div className="content">
  <h1>About Me</h1>
</div>
<div className="pic"></div>
</div>
    </div>
  )
}
