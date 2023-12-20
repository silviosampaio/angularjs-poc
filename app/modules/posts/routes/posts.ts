export function PostsRoute($stateProvider: any) {
  "ngInject";

  $stateProvider.state("posts", {
    name: "posts",
    url: "/",
    component: "postList",
  });
}
