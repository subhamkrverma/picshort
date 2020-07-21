var firebaseConfig = {
    apiKey: "AIzaSyAOS5tqDWokhRm89LN72IHM66fGI9NhaR4",
    authDomain: "picshort-feedback.firebaseapp.com",
    databaseURL: "https://picshort-feedback.firebaseio.com",
    projectId: "picshort-feedback",
    storageBucket: "picshort-feedback.appspot.com",
    messagingSenderId: "681212252549",
    appId: "1:681212252549:web:26b93075c1c34a7a0cf4ec",
    measurementId: "G-F5JM4Q3GCF"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
var messagesref = firebase.database().ref('messages');


document.getElementById('feedbackform').addEventListener('submit', submitform);


function submitform(e) {
    e.preventDefault();
    var name = getValue('name');
    var email = getValue('email');
    var phone = getValue('phone');
    var country = getValue('country');
    var message = getValue('message');
    
    savemessage(name, email, phone, country, message);

    document.querySelector('.alert').style.display = 'block';
    
    setTimeout(function () {
        document.querySelector('.alert').style.display = "none";
    }, 3000);
    
    document.getElementById('feedbackform').reset();
}

function getValue(id) {
    return document.getElementById(id).value;
}

function savemessage(name, email, phone, country, message) {
    var newmessageRef = messagesref.push();
    newmessageRef.set({
        name: name,
        email: email,
        phone: phone,
        country: country,
        message: message
    });
    
}