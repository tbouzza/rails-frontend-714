const navbarTransition = () => {

  // 1. Select the navbar
  const navbar = document.querySelector('.navbar-lewagon');
  // console.log(navbar)

  if(navbar) {

    window.addEventListener('scroll', () => {

      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-lewagon-white');
      } else {
        navbar.classList.remove('navbar-lewagon-white');
      }

    });
  }
}


export { navbarTransition }
