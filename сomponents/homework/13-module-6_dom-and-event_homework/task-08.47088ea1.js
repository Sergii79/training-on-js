!function(){var e=document.querySelector(".login-form"),r={email:"",password:""};e.addEventListener("submit",(function(e){e.preventDefault();var a=e.currentTarget.elements,l=a.email,t=a.password;if(""===l.value||""===t.value)return alert("All fields are required!");r.email=l.value,r.password=t.value,console.log(r),e.currentTarget.reset()}))}();
//# sourceMappingURL=task-08.47088ea1.js.map
