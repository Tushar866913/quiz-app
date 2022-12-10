function ready() {
  var xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log('done')
      console.log(this.responseText);
      var data = JSON.parse(this.responseText);
      console.log(data);
       result = [];
       solutions = ["Helga's Diadem", "Grawp", "Defense Against Dark Arts", "Ravenclaw", "Herbology"]

      for (i = 0; i < data.length; i++) {
        //appending div for que
        var container = document.createElement('div');
        container.classList.add('question-container')
        document.getElementById('maindiv-1').appendChild(container)

        // appending que
        var que = document.createElement('p');
        var a = 'Q' + data[i].id + ' ' + data[i].question
        que.innerHTML = a;
        que.classList.add('que')
        container.appendChild(que);


        // appending options with ul
        var list = document.createElement('ul')
        for (j = 0; j < 4; j++) {
          var list_items = document.createElement('li')
          var b = document.createElement('input');
          b.type = 'radio'
          b.name = i;
          b.value = data[i].options[j]
          var c = document.createElement('span');
          c.innerHTML = data[i].options[j]
          list_items.appendChild(b);
          list_items.appendChild(c);
          list.appendChild(list_items)
        }
        container.appendChild(list)

        
      }

      //getting selected options
      var sum = 0;
      document.getElementById('submit').addEventListener('click', function (e) {
        event.preventDefault();
        var answers=document.querySelectorAll("input[type='radio']")
        for (k=0;k<answers.length;k++){
          if(answers[k].checked){
            console.log(answers[k].value)
            result.push(answers[k].value)
          }
        }

        // calculating score
        console.log(result);  
        for(j=0;j<solutions.length;j++){
          if(solutions.indexOf(result[j])>-1){
            sum++;
          }
        }
        console.log(sum);
        document.getElementById('score').innerHTML=sum;
      })

    }

  }
  xhttp.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz', true);
  xhttp.send()



}
