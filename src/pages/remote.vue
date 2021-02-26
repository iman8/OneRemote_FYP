<template>
<f7-page name="remote">
   <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
    f7-nav-title sliding>OneRemote</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>Remote tools</f7-nav-title-large>
    </f7-navbar>

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

</f7-page>
</template>
