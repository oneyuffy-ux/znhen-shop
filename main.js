<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyBX7r3EhD8uj7hH34rGcrydhLy2NZmllGM",
  authDomain: "znhen-shop-a082a.firebaseapp.com",
  projectId: "znhen-shop-a082a",
  storageBucket: "znhen-shop-a082a.appspot.com",
  messagingSenderId: "400295230596",
  appId: "1:400295230596:web:03eafc19db0dfb8e9696d1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
</script>
// Signup
const signupForm = document.getElementById('signupForm');
if(signupForm){
  signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        // สร้าง Document ใน Firestore
        db.collection('users').doc(user.uid).set({
          username: username,
          email: email,
          points: 0,
          history: []
        });
        alert('สมัครสมาชิกสำเร็จ 🎉');
        window.location = 'index.html';
      })
      .catch(error => alert(error.message));
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert('Login สำเร็จ 🎉');
        window.location = 'dashboard.html';
      })
      .catch(error => alert(error.message));
  });
}
