const activeClass = 'active'

function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass)

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass)
      })
      tabContent[index].classList.add(activeClass)
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}

initTabNav()

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
  }

  function activeAccordion() {
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
  })
}

initAccordion()

function initScrollSmooth() {
  function scrollToSection() {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    //Forma alternativa
    /*     const topo = section.offsetTop
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        }) */
  }

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}

initScrollSmooth()

function initAnimateScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - halfWindow < 0
        if (isSectionVisible) {
          section.classList.add('active')
        }
      })
    }

    animateScroll()

    window.addEventListener('scroll', animateScroll)
  }
}

initAnimateScroll()
