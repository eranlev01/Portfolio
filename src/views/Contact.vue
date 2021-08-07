<template>
  <div class="contact">
    <div class="contact-card">
      <div class="card-title">
        <img height="50px" src="../assets/24-7.svg" alt="avatar" class="avatar" />
        <div class="title-text-content">
          <p>24 Hours</p>
          <h2>Contact</h2>
        </div>
      </div>
      <div class="card-content">
        <p>
          If you wanna get in touch, talk to me about a project collaboration or just say hi,
          <br />send me an email/whatsapp messege and let's talk.
        </p>
        <b>I'm available for job offers!</b>
        <div class="contact-p">
          <section class="contact-list">
            <img height="40px" src="../assets/telephone.svg" alt="avatar" class="svg" />
            <span>
              <h5>Call me</h5>0526393896
            </span>
          </section>
          <section class="contact-list">
            <img height="40px" src="../assets/email.svg" alt="avatar" class="svg" />
            <span>
              <h5>Email</h5>eranlev1996@gmail.com
            </span>
          </section>
          <section class="contact-list">
            <img height="40px" src="../assets/social-media.svg" alt="avatar" class="svg" />
            <span>
              <h5>WhatsApp</h5>0526393896
            </span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@media screen and (max-width: 1096px) {
  .contact-p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: auto;
    line-height: 1.5;
    margin: 20px auto !important;
  }
  .contact-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start !important;
    width: 100%;
    align-items: center;
    margin: 10px 25px;
  }
  .contact-list h5 {
    font-size: 16px !important;
  }
  .contact-list span {
    font-size: 13px !important;
  } 
}
@media screen and (max-width: 600px) {
  .avatar {
    width: 40px;
    height: 40px;
  }
  .title-text-content p, h2{
    font-size: smaller;
  }
}

.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
}
.contact-card {
  background: #333;
  padding: 3em;
  border-radius: 10px;
  color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  transition: 300ms ease-in-out;
  opacity: 0.85;
  animation: transitionIn 1s;
  width: 90%;
  max-height: 100%;
}
.contact-card:hover {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  transform: scale(1.01);
  opacity: 1;
}
.contact-card > * {
  transition: 0.5s;
}
.contact-card:hover > * {
  margin: 0 0 +10px;
}
.contact-card > .card-title {
  display: flex;
  align-items: center;
  background-color: #222;
  border-radius: 10px;
}
.avatar {
  border-radius: 50%;
  border: 1px solid rgb(255, 255, 255, 0.4);
  margin: 0 30px;
}
.title-text-content {
  padding: 10px 0;
}
.title-text-content > p {
  margin-bottom: 0;
  color: rgb(210, 210, 210);
}
.title-text-content > h2 {
  margin-top: 0;
}
.card-content > p {
  line-height: 1.5;
  margin: 80px auto;
  animation: transitionFromSides 750ms;
}
.contact-p {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 55px;
  width: auto;
}
.contact-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin: 5px 25px;
}
.contact-list span {
  font-size: 14px;
  margin-left: 10px;
}
.contact-list h5 {
  font-size: 20px;
  margin: 3px;
}
b {
  position: relative;
  font-size: 20px;
  color: rgb(238, 93, 93);
}
@keyframes transitionIn {
  from {
    opacity: 0;
    transform: rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: rotateX(0);
  }
}
@keyframes transitionFromSides {
  from {
    transform: scaleX(0.95);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
