// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDJzZBv9QXWpWFTTQ1wynnU_F8lYQ8lbSU",
      authDomain: "kwitter-3b8ee.firebaseapp.com",
      databaseURL: "https://kwitter-3b8ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-3b8ee",
      storageBucket: "kwitter-3b8ee.appspot.com",
      messagingSenderId: "941197859512",
      appId: "1:941197859512:web:01b729ecdf14581dd2b24d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_room(){
      room_name= document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room_name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div></hr>";
document.getElementById("output").innerHTML +=row;
     //End code
     });});}
getData();

function redirectToRoomName(name) { 
      console.log(name); 
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
       }


    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+" "+user_name+"!";

    




function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}