var PROTO_PATH = "/home/gadamgurban/learn/emiterService/emiter.proto";
var grpc = require("@grpc/grpc-js");
// const grpc = require("grpc");

var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
var object = grpc.loadPackageDefinition(packageDefinition);
var emiter = object.emiter;

var server = new grpc.Server();

server.addService(emiter.EmiterService.service, {
  EmitUserBlocked: EmitUserBlocked,
});

server.bindAsync(
  "0.0.0.0:8080",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("bindAsync => ");
  }
);

function EmitUserBlocked(call, callback) {
  let req = call.request;
  console.log("callback => ", req);
  callback(null, { status: "success" });
}
