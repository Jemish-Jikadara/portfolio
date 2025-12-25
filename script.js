   const html= document.getElementById('HTML');
   const htmltext = document.getElementById('htmltextbox');
   const css= document.getElementById('CSS');
   const csstext = document.getElementById('csstextbox');
   const javascript= document.getElementById('Javascript');
   const javascripttext = document.getElementById('jstextbox');
   const python= document.getElementById('python');
   const pythontext= document.getElementById('pytextbox');
   const cpp= document.getElementById('cpp');
    const cpptext= document.getElementById('cpptextbox');
   const c= document.getElementById('c');
   const ctext= document.getElementById('ctextbox');
   const sql= document.getElementById('sql');
   const sqltext= document.getElementById('SQLtextbox');

html.addEventListener('click',()=>{
    if(html.classList.contains('right')){
      html.classList.remove('right');
      htmltext.classList.remove('left');
    }else{
       html.classList.add('right');
       htmltext.classList.add('left');
    }
   });
   css.addEventListener('click',()=>{
    if(css.classList.contains('left')){
      css.classList.remove('left');
      csstext.classList.remove('right');
    }else{
       css.classList.add('left');
       csstext.classList.add('right');
    }
   });
   javascript.addEventListener('click',()=>{
    if(javascript.classList.contains('right')){
      javascript.classList.remove('right');
      javascripttext.classList.remove('left');
    }else{
       javascript.classList.add('right');
       javascripttext.classList.add('left');
    }
   });
   python.addEventListener('click',()=>{
    if(python.classList.contains('left')){
      python.classList.remove('left');
      pythontext.classList.remove('right');

    }else{
       python.classList.add('left');
       pythontext.classList.add('right');
    }
   });
   cpp.addEventListener('click',()=>{
    if(cpp.classList.contains('right')){
      cpp.classList.remove('right');
      cpptext.classList.remove('left');
    }else{
       cpp.classList.add('right');
       cpptext.classList.add('left');
    }
   });
   c.addEventListener('click',()=>{
    if(c.classList.contains('left')){
      c.classList.remove('left');
       ctext.classList.remove('right');
    }else{
       c.classList.add('left');
        ctext.classList.add('right');
    }
   });
   sql.addEventListener('click',()=>{
    if(sql.classList.contains('right')){
      sql.classList.remove('right');
      sqltext.classList.remove('left');
    }else{
       sql.classList.add('right');
       sqltext.classList.add('left');
    }
   });

const elements = document.querySelectorAll('.scroll-effect');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.2;

        if(position < screenHeight){
            el.classList.add('active');
        }
    });
});






