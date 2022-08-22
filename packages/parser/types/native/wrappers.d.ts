declare const _default: "\n// Protocol Buffers - Google's data interchange format\n// Copyright 2008 Google Inc.  All rights reserved.\n// https://developers.google.com/protocol-buffers/\n//\n// Redistribution and use in source and binary forms, with or without\n// modification, are permitted provided that the following conditions are\n// met:\n//\n//     * Redistributions of source code must retain the above copyright\n// notice, this list of conditions and the following disclaimer.\n//     * Redistributions in binary form must reproduce the above\n// copyright notice, this list of conditions and the following disclaimer\n// in the documentation and/or other materials provided with the\n// distribution.\n//     * Neither the name of Google Inc. nor the names of its\n// contributors may be used to endorse or promote products derived from\n// this software without specific prior written permission.\n//\n// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n// \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n// Wrappers for primitive (non-message) types. These types are useful\n// for embedding primitives in the `google.protobuf.Any` type and for places\n// where we need to distinguish between the absence of a primitive\n// typed field and its default value.\n//\n// These wrappers have no meaningful use within repeated fields as they lack\n// the ability to detect presence on individual elements.\n// These wrappers have no meaningful use within a map or a oneof since\n// individual entries of a map or fields of a oneof can already detect presence.\n\nsyntax = \"proto3\";\n\npackage google.protobuf;\n\noption csharp_namespace = \"Google.Protobuf.WellKnownTypes\";\noption cc_enable_arenas = true;\noption go_package = \"types\";\noption java_package = \"com.google.protobuf\";\noption java_outer_classname = \"WrappersProto\";\noption java_multiple_files = true;\noption objc_class_prefix = \"GPB\";\n\n// Wrapper message for `double`.\n//\n// The JSON representation for `DoubleValue` is JSON number.\nmessage DoubleValue {\n  // The double value.\n  double value = 1;\n}\n\n// Wrapper message for `float`.\n//\n// The JSON representation for `FloatValue` is JSON number.\nmessage FloatValue {\n  // The float value.\n  float value = 1;\n}\n\n// Wrapper message for `int64`.\n//\n// The JSON representation for `Int64Value` is JSON string.\nmessage Int64Value {\n  // The int64 value.\n  int64 value = 1;\n}\n\n// Wrapper message for `uint64`.\n//\n// The JSON representation for `UInt64Value` is JSON string.\nmessage UInt64Value {\n  // The uint64 value.\n  uint64 value = 1;\n}\n\n// Wrapper message for `int32`.\n//\n// The JSON representation for `Int32Value` is JSON number.\nmessage Int32Value {\n  // The int32 value.\n  int32 value = 1;\n}\n\n// Wrapper message for `uint32`.\n//\n// The JSON representation for `UInt32Value` is JSON number.\nmessage UInt32Value {\n  // The uint32 value.\n  uint32 value = 1;\n}\n\n// Wrapper message for `bool`.\n//\n// The JSON representation for `BoolValue` is JSON `true` and `false`.\nmessage BoolValue {\n  // The bool value.\n  bool value = 1;\n}\n\n// Wrapper message for `string`.\n//\n// The JSON representation for `StringValue` is JSON string.\nmessage StringValue {\n  // The string value.\n  string value = 1;\n}\n\n// Wrapper message for `bytes`.\n//\n// The JSON representation for `BytesValue` is JSON string.\nmessage BytesValue {\n  // The bytes value.\n  bytes value = 1;\n}\n";
export default _default;
