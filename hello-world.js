exports.handler = function(event, context) {
  context.succeed("hello world");
};

function badFormat(arg) {
  const foo = "bar";
  const baz = "bar";

  return {
    foo,
    baz
  };
}
