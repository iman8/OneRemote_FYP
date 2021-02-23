<template>
  <f7-page name="form">
    <f7-navbar title="Form" back-link="Back"></f7-navbar>

    <f7-block-title>Form Example</f7-block-title>
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Name"
        type="text"
        placeholder="Your name"
      ></f7-list-input>

      <f7-list-input
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></f7-list-input>

      <f7-list-input
        label="Password"
        type="password"
        placeholder="Password"
      ></f7-list-input>

      <f7-list-input
        label="Phone"
        type="tel"
        placeholder="Phone"
      ></f7-list-input>

      <f7-list-input
        label="Gender"
        type="select"
        >
        <option>Male</option>
        <option>Female</option>
      </f7-list-input>

      <f7-list-input
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
      ></f7-list-input>

    <f7-block-title>Buttons</f7-block-title>
    <f7-block strong>
      <f7-row tag="p">
        <f7-button class="col" small round outline>Small Round</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
