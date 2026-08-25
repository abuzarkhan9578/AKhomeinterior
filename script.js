function toggleMenu(){document.getElementById("navbar").classList.toggle("active");}
document.querySelectorAll("#navbar a").forEach(function(link){link.addEventListener("click",function(){document.getElementById("navbar").classList.remove("active");});});
document.getElementById("contactForm").addEventListener("submit",function(event){event.preventDefault();const name=document.getElementById("name").value;document.getElementById("formMessage").textContent="Thank you "+name+". Your inquiry has been received.";this.reset();});
