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

    <f7-block strong>
      <p>This is an example of split view application layout, commonly used on tablets. The main approach of such kind of layout is that you can see different views at the same time.</p>

      <p>Each view may have different layout, different navbar type (dynamic, fixed or static) or without navbar.</p>

      <p>The fun thing is that you can easily control one view from another without any line of JavaScript just using "data-view" attribute on links.</p>
    </f7-block>
    

    <f7-block-title>Sign in/Sign up</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#my-popup">Sign up</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    
    <f7-block v-if="user" strong>
    <f7-block-header>You are logged in as {{user.DisplayName}} {{user.email}}</f7-block-header>
    <f7-button v-on:click="onLogoutClicked">Logout</f7-button>
    </f7-block>
    <f7-block v-else strong>
        <form @submit.prevent="onLoginWithEmailClicked" action="" method="GET">
        <f7-list class="login-list" no-hairlines-md>
        <f7-list-input class="email-input" :value="email" @input="email = $event.target.value" label="Login with your email address" type="email" placeholder="Email address">
        <f7-list-input :value="password" @input="password = $event.target.value" label="Enter your password" type="password" placeholder="Password">
        </f7-list>
        <f7-button fill type="submit">Login</f7-button>
        </form>
    </f7-block>
    
    <script>
    import * as firebase from 'firebase';
    import 'firebase/auth';
    
    export default {
        data() {
            return {
            user: null, 
            };
        },
        methods() {},
        mounted() {
            const config = {
                apiKey: "AIzaSyCtWQkRQqSRQT80ZzJ8IIpOpFoi0d3zsuo",
                authDomain: "oneremote-52a94.web.app",
            };
            
            const firebaseApp = firebase.initializeApp(config);
            
            //fires when user logs in or out
            firebase.auth().onAuthStateChanged((user) => {
                console.log('User auth status has changed', user);
                this.user = user;
            });
        },
    };
    </script>
    


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