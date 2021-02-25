<template>
  <f7-app v-bind="f7params" theme-dark>

  <!-- Right panel with reveal effect-->
  <f7-panel right reveal theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Menu"></f7-navbar>
        <f7-list>
          <f7-list-item link="/about/" view=".view-main" panel-close title="About"></f7-list-item>
          <f7-list-item link="/form/" view=".view-main" panel-close title="Form"></f7-list-item>
          <f7-list-item link="#" view=".view-main" back panel-close title="Remote Tools"></f7-list-item>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Your main view, should have "view-main" class -->
  <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import { f7, f7ready } from 'framework7-vue';
  import { getDevice }  from 'framework7/lite-bundle';
  import cordovaApp from '../js/cordova-app.js';

  import routes from '../js/routes.js';
  import store from '../js/store';

  export default {
    setup() {
      const device = getDevice();
      // Framework7 Parameters
      const f7params = {
        name: 'OneRemote', // App name
        theme: 'auto', // Automatic theme detection


        id: 'io.framework7.myapp', // App bundle ID
        // App store
        store: store,
        // App routes
        routes: routes,


        // Input settings
        input: {
          scrollIntoViewOnFocus: device.cordova && !device.electron,
          scrollIntoViewCentered: device.cordova && !device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      };
      // Login screen data
      const username = ref('');
      const password = ref('');

      const alertLoginData = () => {
        f7.dialog.alert('Username: ' + username.value + '<br>Password: ' + password.value, () => {
          f7.loginScreen.close();
        });
      }
      onMounted(() => {
        f7ready(() => {
          // Init cordova APIs (see cordova-app.js)
          if (device.cordova) {
            cordovaApp.init(f7);
          }

          // Call F7 APIs here
        });
      });

      return {
        f7params,
        username,
        password,
        alertLoginData,
      }
    }
  }

</script>
