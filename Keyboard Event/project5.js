const insert = document.getElementById('insert');

window.addEventListener('keydown',(e)=>{ 
  insert.innerHTML = `
    <div class="color">
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>  
    </div>
  `;
})


  //setTimeout and setInterval are used for calling the api after a certain time or interval
  // setInterval takes given time or interval and executes the function after that time repeatedly where setTimeout does it once
  //  HANDLER is a function and a callback without a name and is used as a parameter in setTimeout and setInterval