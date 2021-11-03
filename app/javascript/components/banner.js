import Typed from 'typed.js';

const bannerTyped = () => {

  console.log('in Banner typed !')

  const typed = new Typed('#banner-typed-text', {
    strings: ["Come On Sami !!!", "JS is so much FUN, right Janyl?"],
    typeSpeed: 30,
    loop: true
  });

}

export { bannerTyped }
