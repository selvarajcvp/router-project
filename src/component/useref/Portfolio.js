

export function Header({ pageRefs }) {

    function scrollIntoView(type) {
      pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <header className="btn">
        <button onClick={() => scrollIntoView('about')}>
          HTML
        </button>
        <button onClick={() => scrollIntoView('techno')}>
          CSS
        </button>
        <button onClick={() => scrollIntoView('portfolio')}>
         JS
        </button>

        <button onClick={() => scrollIntoView('sample')}>
         REACT
        </button>

        <button onClick={() => scrollIntoView('node')}>
       MONGO DB
        </button>
      </header>
    );
  };
  
  export  function About({ pageRefs }) {
    return (
      <section
        className="page about"
        ref={el => pageRefs.current = { ...pageRefs.current, about: el }}>
        < img src="https://html.com/wp-content/uploads/html-hpg-featured-new.png"/>
      </section>
    );
  };
  
  export function Technology({ pageRefs }) {
    return (
      <section
        className="page techno"
        ref={el => pageRefs.current = { ...pageRefs.current, techno: el }}>
        < img src="https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg"/>

      </section>
    );
  };
  
  export function Portfolio({ pageRefs }) {
    return (
      <section
        className="page portfolio"
        ref={el => pageRefs.current = { ...pageRefs.current, portfolio: el }}>
        < img src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png"/> 
      </section>
    );
  };
  
 
  export function Sample({ pageRefs }) {
    return (
      <section
        className="page sample"
        ref={el => pageRefs.current = { ...pageRefs.current, sample: el }}>
         <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2"></img>
       </section>
    );
  };
  
  export function Node({ pageRefs }) {
    return (
      <section
        className="page node"
        ref={el => pageRefs.current = { ...pageRefs.current, node: el }}>
         <img src="  https://www.bloorresearch.com/wp-content/uploads/2013/03/MONGO-DB-logo-300x470--x.png"></img>
       </section>
    );
  };
  
 

