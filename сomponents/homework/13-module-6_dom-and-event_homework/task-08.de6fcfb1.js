const e=document.querySelector(".login-form"),r={email:"",password:""};e.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:l,password:t}}=e.currentTarget;if(""===l.value||""===t.value)return alert("All fields are required!");r.email=l.value,r.password=t.value,console.log(r),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.de6fcfb1.js.map
