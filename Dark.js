
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}
window.onload = function() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

function Telefone_Forms()
{
    var tel_formatado = document.getElementById("Telefone").value
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("Telefone").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("Telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
        }
    }
    if (tel_formatado[9]!="-")
    {
        if(tel_formatado[9]!=undefined)
        {
            document.getElementById("Telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
        }
    }
    localStorage.setItem("telefone", tel_formatado)
}

const text = "Eu sou Artur Rachid e esse é o meu Portifólio";
  const speed = 100;
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      document.getElementById('typing-effect').innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, speed);
    }
  }


  window.onload = typeEffect;
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const fadeElements = document.querySelectorAll('.fade-in');
    
  function handleScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.style.transition = 'opacity 1s, transform 1s';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  