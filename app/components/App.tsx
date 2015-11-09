/* global ReactMeteorData */
import * as React from 'react';
import * as reactMixin from 'react-mixin';
import BlazeTemplate from './BlazeTemplate';
import {Users, Posts} from '../collections/index';
import {Template} from '../globals';
import './App.css';

Meteor.call('sayHello', function(err, res) {
  console.log(res);
});

@reactMixin.decorate(ReactMeteorData)
export default class App extends React.Component<any, any> {
  getMeteorData() {
    return {
      users: Users.find().fetch()
    };
  }

  render() {
    let userCount = Users.find().fetch().length;
    let postsCount = Posts.find().fetch().length;
    return (
      <div className="App">
        <BlazeTemplate template={Template.loginButtons} />
        <h1>Hello Webpack!</h1>
        <p>There are {userCount} users in the Minimongo  (login to change)</p>
        <p>There are {postsCount} posts in the Minimongo  (autopublish removed)</p>
      </div>
    );
  }
}

declare var ReactMeteorData;
