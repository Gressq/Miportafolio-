let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #0c103c;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0c103c;">"Estudio Tecnologías y Sistemas de Información, y me gusta el diseño Front-End."</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
