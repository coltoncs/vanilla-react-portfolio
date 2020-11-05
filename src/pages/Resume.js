import './Resume.css';

export default function Resume(){
    return (
        <section>
            <div className="header">
                <h1>Hello, my name is Colton Sweeney.</h1>
                <h3>I live in Raleigh, NC, I'm 22-years-old, and some things I enjoy include cars, cats, and computers.</h3>
            </div>
            <div className="content">
                <p>I built this website as a way for me to practice my vanilla HTML and CSS abilities. Oftentimes while learning or starting new projects, I'll find 
                    myself fixating on utilizing different styling frameworks, and sometimes spending too much time tinkering with customization that I'll lose myself 
                    to the real goal of whatever I'm working on in the moment. With the hundreds (and possibly thousands) of options developers are given to build 
                    applications, it's no wonder that many newcomers find themselves stuck in the same endless loop of picking up a framework, losing themselves in 
                    the abstraction and, when it comes down to it, ultimately losing sight of the fundamentals that empower those same frameworks.
                </p>
                <br/>
                <p>Understanding that I needed to focus more time on the barebones of what drives the internet, I spun up this quick React app to begin testing. 
                    Ignoring the amazing setup that <code>npx create-react-app</code> scaffolds for developers, I built and implemented everything from scratch 
                    without use of third-party CSS or JavaScript libraries (don't count React in there!). 
                </p>
            </div>
        </section>
    );
}