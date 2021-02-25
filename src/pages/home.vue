<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">


      <f7-nav-title sliding>OneRemote</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>OneRemote</f7-nav-title-large>
    </f7-navbar>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <p>Copyright OneRemote ©</p>
    </f7-toolbar>
    
    <!-- Page content-->
    <!-- includes card-expandable -->
<div class="card card-expandable">
  <!-- card content -->
  <div class="card-content">
     <div class="bg-color-white" style="height: 300px">
            <div class="card-header text-color-black display-block">OneRemote<br />
              <small style="opacity: 0.7">Recommending you all tools suitable for you</small>
            </div>
            <a href="#" class="link card-close card-opened-fade-in color-black"
              style="position: absolute; right: 15px; top: 15px">
              <i class="icon f7-icons">xmark_circle_fill</i>
            </a>
          </div>
    <div class="card-header">OneRemote</div>
       <p>Missing your loved ones?Need a way to contact them? Are you in need of a tool to work from home? You are in the correct place!</p>
           <button class="col button button-outline button-round">Find your tool!</button>
  </div>
</div>
<div class="card card-expandable">
  <!-- card content -->
  <div class="card-content">
     <div class="bg-color-teal" style="height: 300px">
            <div class="card-header text-color-black display-block"><br />
              <small style="opacity: 0.7">Recommending you all tools suitable for you</small>
            </div>
            <a href="#" class="link card-close card-opened-fade-in color-black"
              style="position: absolute; right: 15px; top: 15px">
              <i class="icon f7-icons">xmark_circle_fill</i>
            </a>
          </div>
    <div class="card-header">OneRemote</div>
  </div>
</div>

<!-- show if user logged in -->
<f7-block v-if="user" strong>
    <f7-block-header>Welcome {{user.email}}!</f7-block-header>
    <f7-button v-on:click="onLogoutClicked">Logout</f7-button>
</f7-block>
<!--show if user not logged in -->
<f7-block v-else strong>
    <form @submit.prevent="onLogWithEmailClicked" action="" method="GET">
        <!--User Login-->
        <f7-list class="login-list" no-hairlines-md>
            <f7-list-input class="email-input" type="email" placeholder="Email Address" :value="email"
            @input="email = $event.target.value" label="Enter your login email:" />
            <f7-list-input type="password" placeholder="Password" :value="password" @input="password = 
            $event.target.value" label="Enter password:" />
        </f7-list>
        <f7-button fill type="submit">Login</f7-button>
    </form>
</f7-block>
<f7-block v-if="!user" strong>
        <!-- user sign up-->
        <f7-block-title>Do you want to register?</f7-block-title>
        <f7-button v-if="!showSignupForm" fill v-on:click="showSignupForm = true">Create account</f7-button>
        <form @submit.prevent="onSignupClicked" action="" method="GET">
            <f7-list v-if="showSignupForm" class="login-list" no-hairlines-md>
                <f7-list-input class="email-input" :value="email_signup" @input="email_signup = 
                $event.target.getvalue" type="email" placeholder="Email address" label="Enter your email:" />
                <f7-list-input type="password" placeholder="Password"  :value="password_signup"
                @input="password_signup = $event.target.value"  label="Create your password:" />
            </f7-list>
            <f7-button v-if="showSignupForm" fill type="submit">Create account</f7-button>
        </form>
</f7-block>
    
    <f7-list>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Creator of OneRemote"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>
    
    <f7-block-title>Contact Developer</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
    </f7-list>
    

  </f7-page>
</template>

    <!--Firebase code, configure settings from firebase website-->
    <script>
    import { firebase } from '@firebase/app'
    import '@firebase/auth'
    
    export default {
        data(){ return{user: null, email: '', password: '', email_signup: '', password_signup: '', showSignupForm: 
        false, }; },
        methods: { onLoginWithEmailClicked(){ firebase.auth().signInWithEmailAndPassword(this.email,this.password).then( () => { this.user = firebase.auth().currentUser.user; } ).catch( (error) => { this.$f7.dialog.alert(error.message); } ); }, onSignupClicked(e){ e.preventDefault(); firebase.auth().createUserWithEmailAndPassword(this.email_signup, this.password_signup).catch( (error) => {this.$f7.dialog.alert(error.message + 'Error creating user', ''); }); }, onLogoutClicked() {firebase.auth().signOut(); }, 
        mounted(){ this.$f7.dialog.preloader();
            //configure using settings from firebase online application 
            const config = { apiKey: "AIzaSyCtWQkRQqSRQT80ZzJ8IIpOpFoi0d3zsuo", authDomain: "oneremote-52a94.web.app",  };
            const firebaseApp = firebase.initializeApp(config); firebase.auth().onAuthStateChanged( (user) => {
            this.$f7.dialog.close(); this.user = user; } ); }, }
            }
        </script>
    



