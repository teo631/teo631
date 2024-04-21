const currentDate = new Date();

const dateDifferenceInSeconds = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / 1_000;

if (!localStorage.getItem('myDate')) {
    // If not, assign the key 'myDate' to a default date value (e.g., January 1, 1970)
    const defaultDate = new Date(1970, 0, 1);
    localStorage.setItem('myDate', defaultDate.toISOString());
}



function sendMsg(){

    const savedDate = new Date(localStorage.getItem('myDate'));
    console.log(dateDifferenceInSeconds(savedDate,new Date))
    if(dateDifferenceInSeconds(savedDate,new Date)<5){
        document.getElementById("result").innerHTML="Heey ur trying to send way too many messages, I higly doubt that you are that obsesed over contacting me."
        console.log("stop")
        return
    }else{
        document.getElementById("result").innerHTML=""
    }
    
    localStorage.setItem('myDate', new Date().toISOString());

    let dataToSend = {
        name: document.getElementById("yourName").value,
        msg: document.getElementById("messageText").value
    };

    fetch('http://teo631.pythonanywhere.com/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then(response => {
          console.log('Message sent to server.');
          console.log(response);
          return response.json(); // Parse the JSON response
        })
        .then(data => {
          console.log('Server response:', data); // Log the parsed JSON response
          document.getElementById("result").innerHTML=data.r;
        })
        .catch(error => {
          console.error('There was a problem sending/receiving the message:', error);
        }); 
}

fetch('http://teo631.pythonanywhere.com/ping', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: "",
  })
    .then(response => {
      console.log('Message sent to server.');
      console.log(response);
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      document.getElementById("serverStatus").innerHTML="Server status: "+data.status;
    })
    .catch(error => {
        document.getElementById("serverStatus").innerHTML="Server status: No response, something has probably gone catastrophic wrong server side or I am doing some maintinance. Your messages will be voided if you send any.";
    }); 