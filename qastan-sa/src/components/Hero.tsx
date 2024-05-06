import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'scroll-smooth';
import Observer from 'resize-observer-polyfill';

// Importeer hier je CSS-bestanden voor Tailwind CSS-styling

const Hero: React.FC = () => {
  useEffect(() => {
    // GSAP ScrollTrigger plugin activeren
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ trialWarn: false });

    // Selecteer elementen
    const wrapper = document.querySelector('#wrapper');
    const content = document.querySelector('#content');
    const sections = document.querySelector('.sections');
    const section1 = document.querySelector('.section-1');

    // Variabelen voor schermgrootte
    let winWidth = window.innerWidth;

    // Variabelen voor ScrollSmoother en Observer
    let smoother, observer, direction;

    // Desktop-only check voor ScrollSmoother
    if (!ScrollTrigger.isTouch) {
      smoother = ScrollSmoother.create({
        wrapper: wrapper,
        content: content,
        smooth: 0.8,
        effects: true
      }).paused(true);
    }

    // Observer initialiseren
    function initObserver() {
      observer = Observer.create({
        target: document.body,
        ignore: '[data-ignore]',
        type: 'pointer',
        onToggleY: (self: any) => {
          updateDirection(self);
        },
        onPress: (self: any) => {
          gsap.set(content, {
            cursor: 'grabbing'
          });
          
          updateDirection(self, true);
    
          gsap.to('body', {
            backgroundColor: '#111',
            duration: 0.5
          });
          gsap.to(section1, {
            scale: 0.97,
            duration: 0.5
          });
        },
        onRelease: (self: any) => {
          gsap.set(content, {
            cursor: 'grab'
          });
    
          gsap.to(section1, {
            rotateX: '0deg'
          });
          gsap.to('body', {
            backgroundColor: '#222',
            duration: 0.5
          });
          gsap.to(section1, {
            scale: 1,
            duration: 0.5
          });
        },
        tolerance: 10
      });
    }

    // Richting bijwerken (en perspectief-origin)
    function updateDirection(theObserver: any, immediate = false) {
      const perspectiveOriginX = Math.floor(100 - theObserver.startX / winWidth * 100);
    //   const perspectiveOriginY = Math.floor(smoother.scrollTrigger.animation.progress() * 100);
      
    //   if (immediate) {
    //     gsap.set(sections, {
    //       perspectiveOrigin: `${perspectiveOriginX}% ${perspectiveOriginY}%`
    //     });
    //   } else {
    //     gsap.to(sections, {
    //       perspectiveOrigin: `${perspectiveOriginX}% ${perspectiveOriginY}%`,
    //       duration: 0.5
    //     });
    //   }
      
      direction = (theObserver.deltaY < 0 ? 'up' : 'down');
      
      // Richting voor slepen is omgekeerd
      if (direction === 'up') {
        gsap.to(section1, {
          rotateX: '3deg',
          duration: 0.5
        });
      } else if (direction === 'down') {
        gsap.to(section1, {
          rotateX: '-3deg',
          duration: 0.5
        });
      }
    }

    // Initialisatiepagina
    function initPage() {
      if (smoother) {
        ScrollTrigger.normalizeScroll({
          ignore: '[data-ignore]',
          type: 'pointer,wheel'
        });
        smoother.paused(false);
        initObserver();
      }
    
      gsap.set(content, {
        cursor: 'grab'
      });
    
      gsap.to('.indicator', {
        autoAlpha: 1,
        duration: 1,
        onComplete: () => {
          gsap.fromTo('.indicator', {
            autoAlpha: 1,
          }, {
            autoAlpha: 0,
            duration: 1,
            scrollTrigger: {
              scrub: true,
              trigger: '.indicator',
              start: 'center 80%',
              end: 'center 70%',
              // markers: true
            }
          });
        }
      });
    }

    // Resize functie
    function onResize() {
      winWidth = window.innerWidth;
      ScrollTrigger.refresh();
    }

    window.addEventListener('resize', onResize);

    // Animaties voor sectie 1
    const introTl = gsap.timeline();
    
    introTl.fromTo(section1, {
      transformOrigin: 'center bottom',
      autoAlpha: 0,
      yPercent: 50
    }, {
      autoAlpha: 1,
      yPercent: 0,
      duration: 1,
      delay: 1,
      ease: 'expo'
    })
    .from('.title-1 .title-text', {
      yPercent: 100,
      duration: 1,
      ease: 'power3'
    }, 1.5)
    .from('.title-2 .title-text', {
      autoAlpha: 0,
      duration: 1.5
    }, 2)
    .from('.sub-title-1', {
      autoAlpha: 0,
      x: 30,
      duration: 0.5,
      ease: 'power3'
    }, '-=1')
    .from('.sub-title-2', {
      autoAlpha: 0,
      x: -30,
      duration: 0.5,
      ease: 'power3'
    }, '-=1')
    .from('.credit', {
      autoAlpha: 0,
      duration: 0.3,
      onComplete: () => {
        initPage();
      }
    }, '-=1');

    // Animaties voor sectie 2
    gsap.fromTo('.section-2 .info', {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      duration: 2,
      scrollTrigger: {
        scrub: true,
        trigger: '.section-2 .info',
        start: 'center 80%',
        end: 'center center',
        // markers: true
      }
    });
  }, []);

  return (
    <div id="wrapper">
      <div id="content">
        <div className="sections">
          <section className="section-1">
            <div className="c-title">
              <div className="info">
                <div className="sub-title sub-title-1 font-book font-slant">
                  <em>GSAP</em>
                </div>
                <div className="title title-1 font-bold font-slant">
                  <div className="title-text">Drag Demo</div>
                </div>
                <div className="sub-title sub-title-2 font-book font-slant">
                  <em>v3.10</em>
                </div>
                <div className="title title-2 font-medium font-slant">
                  <div className="title-text"><span className="font-book">with</span> ScrollSmoother</div>
                </div>
              </div>
              <div className="indicator">
                <div className="pointer">
                  ☟
                </div>
              </div>
              <div className="credit font-medium">
                By: <a href="https://vanholtz.co" target="_blank" rel="noopener" data-ignore>Eric Van Holtz</a>
              </div>
            </div>
          </section>
          <section className="section-2 font-book" data-speed="0.75">
            <div className="info">
              <div className="text">For more information visit:</div>
              <a className="font-medium" href="https://greensock.com/docs/v3/Plugins/ScrollSmoother" target="_blank" rel="noopener" data-ignore>
                The Greensock Docs
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
