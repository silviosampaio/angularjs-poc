import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { PostsRoute } from "./modules/posts/routes/posts";
import { postListModule } from "./modules/posts/components/post-list";

var angularPocApp = angular
  .module("angularPocApp", [uiRouter, postListModule])
  .config(($stateProvider: any, $urlRouterProvider: any) => {
    PostsRoute($stateProvider);
    $urlRouterProvider.otherwise("/");
  });
