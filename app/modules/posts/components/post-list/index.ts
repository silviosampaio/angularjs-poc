import angular from "angular";
import { postList } from "./component";

export const postListModule = angular
  .module("postListModule", [])
  .component("postList", postList).name;
